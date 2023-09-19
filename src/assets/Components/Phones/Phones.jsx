// import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import {Circles} from 'react-loader-spinner'


const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

     useEffect(() =>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(rest => rest.json())
        // .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData  = data.data.data;
            const phonesWithFakeData = phoneData.map(phone =>{
                const obj ={
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
        // console.log(phonesWithFakeData);
            setPhones(phonesWithFakeData)
            setLoading(false)
        })
    },[]);
    return (
        <div>
            {loading &&
                <div>
                    <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
                </div>
            }
            <h2 className="text-5xl">Phones:  {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey={'name'}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
            <div>

            </div>
        </div>
    );
};

export default Phones;
import PropTypes from 'prop-types';
import Features from '../Features/Features';
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return(
        <div className='bg-blue-500 rounded-md p-4 text-white flex flex-col'>
            <h2 className='text-center'>
                <span className='text-7xl font-semibold'>{price}</span>
                <span className='text-2xl'> /mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
            <div className='pl-6 flex-grow'>
            {
                features.map((feature, index) => <Features key={index} feature={feature}></Features>)
            }
            </div>
            <button className="btn btn-neutral mt-10 font-semibold">Buy Now</button>
        </div>
    );      
};

PriceOption.PropTypes ={
    option: PropTypes.object
}

export default PriceOption;
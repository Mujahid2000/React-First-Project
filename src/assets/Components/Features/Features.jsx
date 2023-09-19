import PropTypes from 'prop-types';
import { AiFillCheckCircle  } from "react-icons/ai";

const Features = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-3'><AiFillCheckCircle className='text-green-500 mr-2'> </AiFillCheckCircle> {feature}</p>
        </div>
    );
};

Features.PropTypes ={
    Feature: PropTypes.string
}
export default Features;
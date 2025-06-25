import Image from 'next/image';
import React from 'react'

import { FaStar , FaRegStar } from "react-icons/fa";

interface propsType {
    img : string;
    title : string;
    desc : string;
    price : string;
    rating : number;
    
  
}



const ProductCard: React.FC<propsType> = ({img, title, desc, price, rating}) => {

const generateRating = (rating:number) =>{
    switch (rating) {
        case 1:
            return(
                <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    
                </div>
            ); 
            case 2:
            return(
                <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    
                </div>
            ); 
            case 3:
            return(
                <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                    
                </div>
            ); 
    
            case 4:
            return(
                <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    
                </div>
            ); 
            case 5:
                return(
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                       <FaStar />
                       <FaStar />
                       <FaStar />
                       <FaStar />
                       <FaStar />
                        
                    </div>
                ); 
        
    
    
        default:
            return null;
    }
}

  return (
    <div className='px-4 border h-[480px] border-gray-300 rounded-xl max-w-[400px] '>
        <div>
            <Image className='w-full h-[300px]' src={img} width={200} height={300} alt={title} /> 
        </div>

<div className='space-y-2 py-2 '>
    <h2 className='text-accent font-medium uppercase rounded-sm cursor-pointer'>{title}</h2>
    <p className='text-gray-500 max-w-[150px]'>{desc}</p>
    <div>{generateRating(rating)}</div>

    <div className='font-bold flex gap-4 '> 
    ${price}
    <del className='text-gray-500 font-normal'>${parseInt(price) + 50}.00</del>
    </div>

</div>

    </div>
  )
}

export default ProductCard
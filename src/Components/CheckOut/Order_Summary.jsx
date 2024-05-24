import React from 'react'
import { useDispatch } from 'react-redux'
import {  removeItem } from '../Store/cartSlice'
const Order_Summary = ({ category, id, image, price, quantity, title ,}) => {
      const dispatch = useDispatch()

    const handleRemoveItem=()=>{
        
          dispatch(removeItem({id,price,quantity}))
    }

  
    

    return (


        <tr className=' rounded-md mt-10  p-4 mx-4' style={{boxShadow:"2px 2px 10px gray"}}>
            <td className=' ' colSpan="2" style={{ width: '50px' }}>
                <div className='flex w-full px-5'>
                    <span className='p-3'>
                        <img src={image} alt='img' className='w-20 h-18 mt-2 ' />
                    </span>
                    <div className='p-3'>
                        <div className='font-semibold text-[14px]'>{title}</div>
                        <div className=' text-sm' >{category}</div>
                    </div>
                </div>
            </td>
            {console.log("imge  crrtt", { image })}

            <td className='text-center mx-6'>
                
                <div className="group flex h-8 flex-shrink-0 items-center justify-between 
                  overflow-hidden rounded-md   md:h-10">
                 
                    <span className="duration-250 text-heading flex h-full w-5  flex-shrink-0 cursor-default
                     items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-12 xl:w-16">
                        {quantity}
                    </span>
                  
                </div>

            </td>

            <td className='   text-center'>$ {price}</td>
            <td className='   text-center'>
               
                <button
                onClick={handleRemoveItem}
                    type="button"
                    className="rounded-md border  px-3 py-2 text-sm 
                    font-semibold text-red-400 shadow-sm focus-visible:outline 
                    focus-visible:outline-2 focus-visible:outline-offset-2
                     focus-visible:outline-green-600"
                >
                    Remove Item
                </button>
               
               
            </td>

        </tr>



    )
}

export default Order_Summary

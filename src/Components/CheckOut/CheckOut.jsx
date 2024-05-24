import React, { useState } from 'react'
import PaymentOptions from './PaymentOptions';
import Delivery_Address from './Delivery_Address';
import Login_Info from './Login_Info';
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '../Cart/CartItem';
import Order_Summary from "./Order_Summary"
import PopUp_Model from '../PopUp_Model/PopUp_Model';
import RazorPayment from '../RazorPayment/RazorPayment';

function CheckOut() {
   
    const cartItems = useSelector(state => state.cart.cartArr);
    const state = useSelector((state)=> state.cart)

    const [showModel, setShowModel] = useState(false);

   
    return (
        <div className='w-full h-full bg-white-800 flex justify-center bg-cyan-900'>

            <div className='w-full max-w-5xl   mx-28 rounded flex justify-center bg-gray-300'>


                <div className='h-auto w-full max-w-2xl bg-gray-300'>             {/* div left  */}

                    <div>
                        <div>
                        <div className='text-white h-12 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 
                                             font-semibold m-2 flex items-center rounded pl-4'>Login Information</div>
                            <Login_Info/>   
                        </div>
                        <div>
                        <div className='text-white h-12 
                         bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 
                                             font-semibold m-2 flex items-center rounded pl-4'>Delivery Address</div>
                            <Delivery_Address/>
                        </div>
                        <div>
                        <div className='text-white h-12 
                         bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 
                                             font-semibold m-2 flex items-center rounded pl-4'>Order Summary</div>
                            <div className='mx-5 bg-gray-200 '>
        <table class="table-fixed w-full ">
          <thead className=' rounded-md
           '>
            <tr className=' flex  '>
              
            </tr>
          </thead>
          <tbody className='mt-10 '>
           {
            cartItems.map((item)=>{
              return(<Order_Summary  
                category={item.category}
                id={item.id}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
                title={item.title}
                
              />
              )
            })
           }

          </tbody>
        </table>
      </div>
      
                        </div>
                        <div>
                            <div className='text-white h-12 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 
                                             font-semibold m-2 flex items-center rounded pl-4'>Payment Options</div>
                            <PaymentOptions onClick={()=>setShowModel(true)} />
                            <RazorPayment/>
                          { showModel &&  <PopUp_Model onClose={()=> setShowModel(false)}/>}
                          
                        </div>
                    </div>

                </div>
                <div className='w-80 h-80  mt-16 ml-5 mr-5 sticky top-0 '>         {/* div right  */}
                <div className=' shadow-md rounded w-80 h-80 bg-gray-200'>
                    <div className='bg-gray-200 items-center h-12 border-b  border-blue-500 mx-3 mt-4'>    <span className="flex items-center h-full text-gray-500 font-semibold text-lg">Price Details</span>
                    </div>
                    <div className='bg-gray-200 items-center mt-4 h-12 flex justify-between  mx-3 '><span>Price</span><span>$ {state.totalPrice}</span></div>
                    <div className='bg-gray-200 items-center mt-2 h-12 flex justify-between mx-3'><span>Delivery Charges</span><span className='text-green-800'>FREE</span></div>
                    <div className='bg-gray-200 items-center mt-2 h-12 flex justify-between mx-3'><span>Packaging Charges</span><span>78</span></div>
                    <div className='bg-gray-200 items-center mt-4 h-10  flex 
                                      border-t border-blue-500 justify-between mx-3'><span className='font-semibold text-lg'>Amount Payable </span><span className='font-semibold text-lg' > $ {state.totalPrice}</span></div>

                </div>
                </div>
            </div>
             
        </div>



    );
}

export default CheckOut;


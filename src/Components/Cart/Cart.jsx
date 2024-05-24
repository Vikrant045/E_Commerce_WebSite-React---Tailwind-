import React, { useEffect } from 'react'
import Container from '../Container/Container'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../Store/cartSlice';
import CartItem from './CartItem';
import { Link, useNavigate } from 'react-router-dom';


export default function Cart() {
  const { cartArr } = useSelector(state => state.cart);
  const state = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (cartArr?.length === 0) {
      setTimeout(()=>{
                navigate("/");
            },[1000])
    }
  }, [cartArr])
  return (


    <div className='flex ml flex-wrap  mt-24 mb-28 justify-center'>
      <div className='min-w-5xl  '>
        <table class="table-fixed w-full max-w-4xl">
          <thead className=' rounded-md
           ' style={{ boxShadow: "2px 2px 10px gray" }}>
            <tr className='h-16  border-green-700  flex  '>
              <th className='ml-10 md:ml-4 mt-5 '>Product</th>
              <th className='ml-44 md:ml-80 mt-5'>Quantity</th>
              <th className='ml-2 md:ml-36 mt-5'>Price</th>
            </tr>
          </thead>
          <tbody className='mt-10 '>
            {
              cartArr.map((item) => {
                return (<CartItem
                  category={item.category}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}
                  title={item.title}
                  showQuantity="false"
                />
                )
              })
            }

          </tbody>
        </table>
      </div>
      <div className='h-80 min-w-80 border-2   mx-5 bg-slate-50
                       rounded-lg' style={{ boxShadow: "2px 2px 10px grey" }}>
        <div className='   w-full p-2 h-full'>
          <div className='flex border-2  border-gray-400  rounded p-3 m-2 px-4 justify-between'>
            <span>Sub Total</span>
            <span>{state.totalPrice}</span>
          </div>
          <div className='flex border-2  border-gray-400  rounded p-3 m-2 px-4 justify-between'>
            <span>Total Price</span>
            <span>$ {state.totalPrice}</span>
          </div>
        </div>

        <div className=' flex justify-between pt-3'>
          <Link to="/payment">
            <button
              onClick={() => useNavigate("/payment")}
              type="button"
              className="rounded-md border  px-3 py-2
        text-center
         text-sm font-semibold
          text-red-400 shadow-sm
           focus-visible:outline 
           bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 text-white
         focus-visible:outline-2 
         focus-visible:outline-offset-2
          focus-visible:outline-green-600  w-36"

            >
              CheckOut
            </button>

          </Link>
          <button
            onClick={() => dispatch(clearCart())}
            type="button"
            className="rounded-md border border-red-600 px-3 py-2
        text-right
         text-sm font-semibold text-red-400 shadow-sm focus-visible:outline 
         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Clear Cart
          </button>
        </div>

      </div>

    </div>






  )
}

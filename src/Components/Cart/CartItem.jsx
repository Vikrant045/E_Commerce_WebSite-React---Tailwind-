import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeItem } from '../Store/cartSlice';

const CartItem = ({ category, id, image, price, quantity, title }) => {
  const dispatch = useDispatch();
  const { cartArr } = useSelector(state => state.cart);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     console.log("cartItems.length in useEffect", cartArr.length);
  //     if (cartArr.length === 0) {
  //       navigate("/");
  //     }
  //   }, [cartArr, navigate]);
  console.log("cartArr", cartArr)
  const handleRemoveItem = () => {
    dispatch(removeItem({ id, price, quantity }));
    // if (cartArr.length === 1) {
    //     setTimeout(()=>{
    //         navigate("/");
    //     },[1000])

    //   }
  };
  

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity({ id, price }));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity({ id, price }));
  };

  return (
    <tr className='rounded-md  p-4 mx-2 md:mx-0 bg-slate-50' style={{ boxShadow: "2px 2px 10px gray" }}>
      <td colSpan="2" style={{ width: '50px' }}>
        <div className='flex w-full px-5'>
          <span className='p-3'>
            <img src={image} alt='img' className='w-20 h-18 mt-2' />
          </span>
          <div className='p-3'>
            <div className='font-semibold text-[10px] md:text-[14px] overflow-hidden   line-clamp-1'>{title}</div>
            <div className='text-sm'>{category}</div>
          </div>
        </div>
      </td>
      {console.log("image", { image })}

      <td className='text-center mx-6'>
        <div className="group flex h-8 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border md:h-10">
          <button
            onClick={handleIncreaseQuantity}
            className="text-heading hover:bg-heading flex h-full w-5 flex-shrink-0 items-center justify-center border-e border-gray-700 transition duration-300 ease-in-out focus:outline-none md:w-11"
          >
            +
          </button>
          <span className="duration-250 text-heading flex h-full w-5 flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out md:w-12 xl:w-16">
            {quantity}
          </span>
          <button
            onClick={handleDecreaseQuantity}
            className="text-heading hover:bg-heading flex h-full w-8 flex-shrink-0 items-center justify-center border-s border-gray-700 transition duration-300 ease-in-out focus:outline-none md:w-12"
          >
            -
          </button>
        </div>
      </td>

      <td className='text-center'>$ {price}</td>
      <td className='text-center'>
        <button
          onClick={handleRemoveItem}
          type="button"
          className="rounded-md border border-gray-500 px-3 py-2 text-sm font-semibold text-red-400 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Remove Item
        </button>
      </td>
    </tr>
  );
};

export default CartItem;

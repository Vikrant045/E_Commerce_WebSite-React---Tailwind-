import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import CartBtn from '../Cart/CartBtn';
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import { setTitle } from '../Store/paginationSlice';
import { useDebounce } from '../../CustomHooks/deBounce';

const Header = () => {
  const dispatch = useDispatch()
  const {filters}= useSelector((state)=> state.pagination)
  const [currTitle, setCurrTitle] = useState(filters.title)
  const debouncedTitle = useDebounce(currTitle, 3000)
  const handleChange =(e)=>{


      setCurrTitle(e.target.value)
  }
  useEffect(()=>{
    dispatch(setTitle(debouncedTitle))
  },[debouncedTitle])

 const  handleKeyPress=(e)=>{
    if(e.key === 'Enter'){
      dispatch(setTitle(debouncedTitle));
    }
  }
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-800 to-purple-900 p-3 shadow-2xl m-1 border rounded-md sticky top-0 z-30">
      <div className=" flex justify-between items-center  w-full ">
      <Link to="/" className="text-white text-[15px] md:text-lg font-bold ml-5">
          E Commerce
        </Link>
        <Link to="/shop" className="text-white text-[15px] md:text-lg font-bold ml-5">
          Shop
        </Link>

        <Link to="/upload" className="text-white text-[15px] md:text-lg font-bold ml-5">
          Upload Image
        </Link>

        <div className="flex items-center space-x-4 p-1">
          <span className=' mr-6 md:mr-14'>
          <input
            className="h-10  w-44 md:w-96 rounded-md border border-white/70 bg-transparent
             px-3 py-2 text-sm placeholder:text-white text-white focus:outline-none focus:ring-1
             focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed
              disabled:opacity-50"
            type="text"
            placeholder="Search Product"
            value={currTitle}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
                                
          </span>
          

          <Link to="/cart" className="text-white text-lg font-bold mr-6 ">

             <CartBtn/>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Header;

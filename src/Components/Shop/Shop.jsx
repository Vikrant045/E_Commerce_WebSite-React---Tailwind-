import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, setFilters, setOffset } from '../Store/paginationSlice';
import ShopCard from './ShopCard';
import ShopCard_Skelten from './ShopCard_Skelten';
import { getCategories } from '../Store/categorySlice';

const Shop = () => {
  const { offset, products, isLoading, limit, filters } = useSelector((state) => state.pagination);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const [minPrice, setMinPrice] = useState(filters?.minPrice ?? 0);
  const [maxPrice, setMaxPrice] = useState(filters?.maxPrice ?? 1000);
  const [categoryId, setCategoryId] = useState(filters?.categoryId ?? '');

  useEffect(() => {
    dispatch(getProducts({ offset, limit, filters }));
  }, [offset, dispatch, filters]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handlePrevious = () => {
    if (offset > 0) {
      dispatch(setOffset(offset - limit));
    }
  };

  const handleNext = () => {
    dispatch(setOffset(offset + limit));
  };

  const applyFilters = () => {
    dispatch(setFilters({ minPrice, maxPrice, categoryId }));
    dispatch(setOffset(0));
  };

  return (
    <div className='flex justify-center'>
      <div className='  min-w-80 mt-32 rounded mb-12 h-auto ' style={{ boxShadow: "2px 2px 10px grey" }}>
        <h2 className='font-semibold  bg-gradient-to-r from-purple-900 via-blue-800 to-purple-900 text-white m-5 p-3 rounded'
                 style={{ boxShadow: "2px 2px 5px grey" }}
        >Filters</h2>
        <div className='bg-indigo-300 rounded my-2 p-2 py-10 border-2 px-5 mx-2' >
          <div>
            <p>Categories</p>
            <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}
              className='w-full p-4 m-1 rounded'
            >
              <option value={null} >All Products</option>
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          <div className='mt-5'> 
            <p>Price</p>
            <select value={minPrice} onChange={(e) => setMinPrice(e.target.value)}
               
               className='w-1/3 p-3 mt-1  rounded'
            >
              <option  value="" disabled hidden>Min</option>
              <option  value="0" style={{padding:"5px"}}>$0</option>
              <option  value="10">$10</option>
              <option  value="20">$20</option>
              <option  value="30">$30</option>
            </select>
            <span className='mx-5'>to</span>
            <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}
             className='w-1/3 p-3 rounded'
            >
              <option value="" disabled hidden>Max</option>
              <option value="40">$40</option>
              <option value="60">$60</option>
              <option value="100">$100</option>
            </select>
          </div>
          <button onClick={applyFilters} className='bg-black text-white p-2 px-5 rounded-lg mt-20' >Apply filters</button>
        </div>
      </div>
      <div className='max-w-5xl w-full flex flex-wrap justify-center h-auto my-28'>
        <div className='flex justify-center items-center flex-wrap w-full'>
          {
           products?.length ==0 && !isLoading? <><h2 className='font-bold'>No More products In this category</h2></> :
          products?.map((item) => (
            isLoading ? <ShopCard_Skelten key={item.id} /> : <ShopCard key={item.id} product={item} />
          ))}
        </div>
        <div className="flex w-full justify-between px-10 pr-28">
          <button
            className={`mx-1  text-sm font-semibold text-gray-900 ${offset === 0 ? 'opacity-0' : 'opacity-100'}`}
            onClick={handlePrevious}
          >
            &larr; Previous
          </button>
          <button onClick={handleNext} className="mx-2 text-sm font-semibold text-gray-900">
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;

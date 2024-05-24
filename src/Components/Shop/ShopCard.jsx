import React from 'react';
import { Link } from 'react-router-dom';

const ShopCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="w-[150px] h-[250px] m-5 rounded-md border bg-gray-50 p-4 relative" style={{ boxShadow: "2px 2px 10px grey" }}>
        <img
          src={product.images[1]}
          alt="Laptop"
          className="h-[100px] w-full rounded-md object-cover"
        />
        <div className="mt-2">
          <h1 className="text-base font-semibold overflow-hidden line-clamp-1">{product.title}</h1>
          <p className="text-xs text-gray-600 overflow-hidden line-clamp-2">
            {product.description}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <h1 className="text-base font-semibold">$ {product.price}</h1>
          <button
            type="button"
            style={{ boxShadow: "2px 2px 10px grey" }}
            className="mt-2 rounded-lg bg-black text-[11px] w-full p-2 font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ShopCard;

import React from 'react'
import { Link } from 'react-router-dom'
const ProductCard = ({product}) => {
  return (
<Link to={`/product/${product.id}`}>
<div className="w-[300px] m-5 rounded-md border bg-gray-50 p-4" style={{boxShadow:"2px 2px 10px grey"}}>
      <img
      src={product.images[1]}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover "
      />
      <div className="mt-2">
        <h1 className="text-lg font-semibold  overflow-hidden   line-clamp-1">{product.title}</h1>
        <p className="text-sm text-gray-600 overflow-hidden line-clamp-5">
          {product.description}
        </p>
        <h1 className="text-lg font-semibold">$ {product.price}</h1>

        <button
          type="button"
          style={{boxShadow:"2px 2px 10px grey"}}
          className="mt-4 rounded-lg bg-black  text-[13px] w-full p-3
           font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Buy Now 
        </button>
      </div>
    </div>
    </Link>
   
  )
}

export default ProductCard

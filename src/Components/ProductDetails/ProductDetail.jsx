import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addToCart, } from '../Store/cartSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'


const ProductDetail = () => {
    const { id } = useParams()
       
    const [product, setProduct] = useState({});
           
    const [firstrImage,setFirstImage] = useState(null);                  
    const [activeImage, setActiveImage] = useState(null)                  
    const dispatch = useDispatch();
    

    const getSingleProduct = async() => {
        let res = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
        let currProduct = res.data;
        console.log("curr pro",currProduct)
        setProduct(currProduct);
        console.log("state ka pro ",product)
        console.log("images",currProduct.images)
        setFirstImage(currProduct.category.image)
        setActiveImage(currProduct.category.image)

    };
    useEffect(() => {              
        console.log("in use Effect")                               //useEffect
        getSingleProduct();
    }, [id])

    const handleAddToCart = () => {
        console.log("product ", product)
        const { id, title, category, price, images } = product;
       const quantity = 1;
       const objForCart = {
        id,
        title,
        price,
        image: category.image,
        category:category.name,
        quantity,
       }
       
       console.log("new obj ",objForCart)
        dispatch(addToCart(objForCart))
       // notify();
        console.log("in add to cart")
    }

    return (
        <section class="overflow-hidden border-2 rounded bg-white" style={{boxShadow:"2px 2px 10px grey"}}>
            <div class="mx-auto max-w-7xl px-5 py-20 mb-10">
                <div class="mx-auto flex flex-wrap items-center lg:w-4/5 ml-8">

                    <div className='flex flex-col gap-6 lg:w-2/4'>
                        <img
                            alt="Nike Air Max 21A"
                            className='w-full h-96 aspect-square object-cover rounded-xl border-2'
                            src={activeImage}
                        />

                        <div className='flex flex-row flex-wrap'>

                            <img src={firstrImage} alt=""
                                className='h-20 w-20 m-2  border-2'
                                onClick={() => setActiveImage(firstrImage)}
                            />
                            {product.images?.map((img) =>

                                <img src={img} alt=""
                                    className='h-20 w-20 m-2 border-2'
                                    onClick={() => setActiveImage(img)}
                                />

                            )
                            }
                        </div>
                    </div>

                    <div class="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                        <h2 class="text-lg font-semibold tracking-widest text-gray-800">
                            {product.title}
                        </h2>
                        <h1 class="my-4 text-3xl font-semibold text-black">{product.name}</h1>
                        <div class="my-4 flex items-center">
                            <span class="flex items-center space-x-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="text-yellow-500"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="nonse"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="text-yellow-500"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="text-yellow-500"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="text-yellow-500"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="text-yellow-500"
                                >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                                <span class="ml-3 inline-block text-xs font-semibold">
                                    4 Reviews
                                </span>
                            </span>
                        </div>
                        <p class="leading-relaxed">
                            {product?.description}
                        </p>
                        <div class="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                            <div class="flex items-center">
                                <span class="mr-3 text-sm font-semibold">Color</span>
                                <button class="h-6 w-6 rounded-full border-2 border-gray-300 focus:outline-none"></button>
                                <button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-gray-700 focus:outline-none"></button>
                                <button class="ml-1 h-6 w-6 rounded-full border-2 border-gray-300 bg-green-200 focus:outline-none"></button>
                            </div>
                            <div class="ml-auto flex items-center">
                                <span class="mr-3 text-sm font-semibold">Size</span>
                                <div class="relative">
                                    <select class="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                                        <option>8 UK</option>
                                        <option>9 UK</option>
                                        <option>10 UK</option>
                                    </select>
                                    <span class="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-chevron-down"
                                        >
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="title-font text-xl font-bold text-gray-900">
                                ${product.price}
                            </span>

                        </div>
                        <div className="space-s-4 3xl:pr-48 flex items-center justify-start gap-2 border-b border-gray-300 py-8 ">
                          
                            <button
                                type="button"
                                onClick={handleAddToCart}
                                className="rounded-md bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900  px-4 py-2 ml-2
                                  h-10 text-sm font-semibold text-white shadow-sm
                                   hover:bg-black/80 focus-visible:outline focus-visible:outline-2 
                                   focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Add to Cart
                            </button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProductDetail

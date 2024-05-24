import React, { useState } from 'react';

import Container from '../Container/Container';
import axios from 'axios';

const FormComponent = () => {

    const [img,setImg]= useState("");

    const handleChange=(e)=>{
        setImg(e.target.files[0])
        console.log("image",e.target.files[0] )
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log("img",img)
        const formData = new FormData();
    formData.append('file', img);
     let res = await axios.post("https://api.escuelajs.co/api/v1/files/upload",formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
     console.log("ress image",)
    }
  return (
    <Container>
      <div className="w-full  border-2 border-gray-400 p-4 flex justify-center my-24">
        <form  className="flex flex-wrap w-full md:w-1/2 lg:w-1/3 border p-4 rounded-sm my-10">
            <div className='border-2 border-gray-500 p-10 rounded' style={{boxShadow:"2px 2px 5px gray"}}>
            <div className="w-full mb-4">
            <label htmlFor="name" className="block mb-1">First Name</label>
            <input id="name" type="text" className="h-10 w-full border rounded-sm px-2 border-1 border-gray-400" />
          </div>
          
          <div className="w-full mb-4">
            <label htmlFor="lname" className="block mb-1">Last Name</label>
            <input id="lname" type="text" className="h-10 w-full border rounded-sm px-2 border-1 border-gray-400 " />
          </div>
          
          <div className="w-full mb-4">
            <label htmlFor="file" className="block mb-1">Upload Image</label>
            <input id="file" type="file" className="w-full"  onChange={handleChange} />
          </div>
          
          <div className="w-full mb-4">
            <label htmlFor="city" className="block mb-1">City</label>
            <input id="city" type="text" className="h-10 w-full border rounded-sm px-2 border-1 border-gray-400" />
          </div>
          <button type='button'   className='text-white bg-black p-3 px-6 rounded' onClick={handleSubmit}>submit</button>
            </div>
            
                 </form>
                
                 
      </div>
    </Container>
  );
};

export default FormComponent;

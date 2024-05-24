import React, { useEffect } from 'react';
import Container from '../Components/Container/Container';
import ProductCard from '../Components/ProductCard/ProductCard';
import Carousel from '../Components/Carousel/Carousel';
import { getAllProducts } from '../Components/Store/productSlice';
import { useSelector,useDispatch } from 'react-redux';
import SkeltenCard from '../Components/SkeltenCard/SkeltenCard';
const Home = () => {
  const slides = [
      
     'https://images.unsplash.com/photo-1636718281370-b5e3f51a5af2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjcwfHxuaWtlJTIwYWlyJTIwam9yZGFufGVufDB8fDB8fHww',
     'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAxfHxuaWtlJTIwYWlyJTIwam9yZGFufGVufDB8fDB8fHww',
     'https://images.unsplash.com/photo-1657801566558-23dcdee5a7b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5pa2UlMjBhaXIlMjBqb3JkYW58ZW58MHx8MHx8fDA',
     'https://images.unsplash.com/photo-1704677982224-89cd6d039fa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxuaWtlJTIwYWlyJTIwam9yZGFufGVufDB8fDB8fHww',
     'https://images.unsplash.com/photo-1656335362192-2bc9051b1824?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG5pa2UlMjBhaXIlMjBqb3JkYW58ZW58MHx8MHx8fDA%3D',
     'https://images.unsplash.com/photo-1657801566558-23dcdee5a7b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5pa2UlMjBhaXIlMjBqb3JkYW58ZW58MHx8MHx8fDA%3D',

];
const dispatch = useDispatch();
  useEffect(()=>{                           // use effect
    dispatch(getAllProducts());
  },[]);

  let products=useSelector((state => state.products.allProducts));
  let loading = useSelector((state => state.products.isLoading));
  return (
    
    <div className='w-full py-8'>
    <Container>
        <div>
          <Carousel slides={slides}/>
        </div>
        <div className='flex flex-wrap justify-center py-7'>
           {console.log("inside the home .jsx ",products)}
          {products?.map((item) => (
          loading?<SkeltenCard/>:<ProductCard key={item.id} product={item} />
        ))}
          </div>
         
        </Container>
      
      </div>
 
 
  );
};

export default Home;

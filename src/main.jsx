import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './Layout/MainLayout.jsx'
import Home from './Pages/Home.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import ProductDetails from './Pages/ProductDetails.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './Components/Store/store.js'
import Cart from './Components/Cart/Cart.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOut from './Components/CheckOut/CheckOut.jsx'
import Shop from './Components/Shop/Shop.jsx'
import Upload from './Components/upload/Upload.jsx'


const stripePromise = loadStripe(String(import.meta.env.PUBLISH_KEY));      // Example key


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route element={<MainLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/payment' element={ <Elements stripe={stripePromise}>
            <CheckOut />
        </Elements>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/upload' element={<Upload/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </PersistGate>


    </ThemeProvider>

  </React.StrictMode>,
)

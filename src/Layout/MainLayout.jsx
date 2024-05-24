import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

const MainLayout = () => {
    return (
        <div className='min-h-screen w-screen flex flex-wrap content-between bg-gray-200'>
        <div className='w-full flex-grow'>
                <Header />
              
                    <Outlet />
             
                <Footer />
            </div>
              
        </div>

    )
}

export default MainLayout

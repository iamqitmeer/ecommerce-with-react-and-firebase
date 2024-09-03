import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

function AppLayout() {
    return (
        <div className='w-full h-screen'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AppLayout
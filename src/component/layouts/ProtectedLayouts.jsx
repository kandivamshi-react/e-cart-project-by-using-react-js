import { SignedIn } from '@clerk/clerk-react'
import React from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import '../../index.css'

const ProtectedLayouts = () => {
  return (
    <div>
      <SignedIn>
        <div className='app-container'>
        {/* <Navbar /> */}
        <div className='body-container'>
            {/* <Sidebar /> */}
            <Sidebar />
        
        <div className='page-content'> 
            <Outlet />

        </div>
        </div>
        </div>
        
        
      </SignedIn>
    </div>
  )
}

export default ProtectedLayouts

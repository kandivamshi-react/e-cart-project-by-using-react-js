import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}
       signInFallbackRedirectUrl="/products"
      //  signUpFallbackRedirectUrl="/products"
     >
      <ClerkLoading>
     <p style={{textAlign: "center"}}>Loading...</p> 
      </ClerkLoading>
      <ClerkLoaded>
   <BrowserRouter>
        <App />
   </BrowserRouter>
   </ClerkLoaded>
    </ClerkProvider>
);
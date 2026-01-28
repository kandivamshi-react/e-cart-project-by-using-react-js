import React, { useState } from 'react'
import ProductCardsDetails from './ProductCardsDetails';
import products from './CardsDetails';
import "../index.css"
import Navbar from '../component/Navbar';




const Products = () => {
  console.log("Products page rendered" , products);
  const [searchTerm, setSearchTerm] = useState("")
  
  return (
    <>
    <div> 
       <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <ProductCardsDetails products={products} searchTerm={searchTerm}/>
    
    </div>
   
    </>
  )}

export default Products

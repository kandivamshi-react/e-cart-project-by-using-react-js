import { useState } from "react";
import "../index.css"
import React from 'react'
const ProductCardsDetails = ({products, searchTerm}) => {
    const pagesize = 10
    const [currentPage, setCurrentPage] = useState(0)

    // console.log("ProductCardsDetails rendered", products.length);
    const filteredProducts = products.filter((item) =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchTerm.toLowerCase())
  )
    const startIndex = currentPage * pagesize;
    const endIndex = startIndex + pagesize;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="content">
      <div className='banner'>
      <img src='https://images.unsplash.com/photo-1542838132-92c53300491e'  alt='banner' className='banner-img'/>
        <div className='banner-content'> 
          <h1 className='product-heading'>Welcome to Sky Glow Products</h1>
          <p className='product-para'>Explore our exclusive collection of products designed to elevate your lifestyle. From cutting-edge technology to stylish accessories, we have everything you need to shine bright. Browse through our curated selection and find the perfect items that resonate with your unique style and needs. Start your journey with Sky Glow Products today and experience quality like never before!</p>
        </div>
    </div>
    <div> 

    </div>
    <div className='card-grid'>
    {currentProducts.map((item) => (
      <div key={item.id} className='product-card'> 
        <img src={item.thumbnail} alt={item.name} />
        <span className='badge'>Discount:  {item.discountPercentage} %</span>
        <h3>{item.name}</h3>
        <p>{item.availabilityStatus}</p>
         <h4>{item.brand}</h4>
         ⭐⭐⭐⭐☆
        <p>{item.price}</p>
        <button>Add to Cart</button>
      </div>
    ))}
    </div>
    <div className="pagination-container">
    {currentProducts.length > 0 ? Array(Math.ceil(products.length/pagesize)).keys().map((pageNumber) => (
        <div key={pageNumber}>
        
            <span key={pageNumber} className="pagination-number"  onClick={() => setCurrentPage(pageNumber)}>
                {pageNumber + 1}
            </span>
        </div>
       
    )) : <p style={{color:"red"}}>No products found.</p>  } 
    
     </div>
    </div>
  )
}

export default ProductCardsDetails

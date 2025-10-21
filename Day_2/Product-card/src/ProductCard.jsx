import React from 'react'
import  './ProductCard.css'

const ProductCard = ({ name, price, image, inStock }) => {
  return (
    <div className='main-card'>
        <div className='main-img'>
            <img className={`product-img ${!inStock ? "out of stock" : ""}`} src={image} alt={name} />
            {!inStock && <div className='notStock'> Out of Stock </div>}
        </div>

        <h3 className='card-name'>{name}</h3>
        <p className='card-price'>₦{price.toLocaleString()}</p>

        <p className={`stockStus ${inStock ? "in" : "out"}`}>
            {inStock ? "In Stock" : "Out of Stock"}
        </p>
    </div>
  )
}

export default ProductCard
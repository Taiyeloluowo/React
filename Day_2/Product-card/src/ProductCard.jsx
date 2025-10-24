function ProductCard({ name, price, image, inStock}) {
    return(
        <div className="container">
            <div className="imageContainer">
                <img className={`product_image ${!inStock ? "outOfStock" : ""}`} src={image} alt={name}></img>
                {!inStock && <div className="notInStock"> Out of Stock </div>}

            </div>
            
            <h1 className="name">{name}</h1>
            
            <div className="priceStock">
                <h3 className={`stockStatus ${inStock ? "in" : "out"}`}>
                    {inStock ? "In Stock" : "Out of Stock"}
                </h3>

                <h3 className="price">₦{price}</h3>
            </div>
           
            

        </div>
    )
}

export default ProductCard;
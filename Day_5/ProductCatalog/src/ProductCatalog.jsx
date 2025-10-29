import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCatalog = () => {
    const products = [
        { name: "Laptop", price: 450000, inStock: true, category: "Electronics" },
        { name: "Phone", price: 150000, inStock: false, category: "Electronics" },
        { name: "Jollof Rice", price: 1500, inStock: true, category: "Food" },
        { name: "T-shirt", price: 3500, inStock: true, category: "Clothing" },
        { name: "Sneakers", price: 18000, inStock: false, category: "Clothing" },
        { name: "Refrigerator", price: 320000, inStock: true, category: "Electronics" },
        { name: "Bread", price: 800, inStock: true, category: "Food" },
        { name: "Suit", price: 25000, inStock: false, category: "Clothing" },
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOrder, setSortOrder] = useState("none");

    // Filter products by category
    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter((p) => p.category === selectedCategory);

    // Sort products by price
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOrder === "lowToHigh") return a.price - b.price;
        if (sortOrder === "highToLow") return b.price - a.price;
        return 0;
    });

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4 text-primary">Product Catalog</h2>

            {/* Filter Buttons */}
            <div className="d-flex flex-wrap justify-content-center mb-3 gap-2">
                {["All", "Electronics", "Clothing", "Food"].map((cat) => (
                    <button
                        key={cat}
                        className={`btn ${selectedCategory === cat ? "btn-primary" : "btn-outline-secondary"}`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Sort Dropdown */}
            <div className="d-flex justify-content-center mb-4">
                <select
                    className="form-select w-auto"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="none">Sort by Price</option>
                    <option value="lowToHigh">Low → High</option>
                    <option value="highToLow">High → Low</option>
                </select>
            </div>

            {/* Product List */}
            <div className="row">
                {sortedProducts.map((product, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-4">
                        <div className={`card h-100 shadow-sm ${product.inStock ? "" : "border-danger"}`}>
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text text-muted">₦{product.price.toLocaleString()}</p>
                                    <span className={`badge ${product.inStock ? "bg-success" : "bg-danger"}`}>
                                        {product.inStock ? "In Stock" : "Out of Stock"}
                                    </span>
                                </div>
                                <div className="mt-3">
                                    {product.inStock ? (
                                        <button className="btn btn-primary w-100">Add to Cart</button>
                                    ) : (
                                        <button className="btn btn-outline-danger w-100" disabled>
                                            OUT OF STOCK
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="card-footer text-muted text-center">{product.category}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Total Count */}
            <p className="text-center mt-4 text-secondary">
                Showing {sortedProducts.length} of {products.length} products
            </p>
        </div>
    );
};

export default ProductCatalog;
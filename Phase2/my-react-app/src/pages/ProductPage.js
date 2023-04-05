import React from 'react';


const ProductPage = () => {
    const product = [
        name => 'Example Product',
        description=> 'This is an example product description.',
        price=>'$9.99',
        
    ];

    return (
        <div>
            <h1>{product.name}</h1>
            <img src= {product.name}alt={product.name} />
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductPage;

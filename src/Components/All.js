import React from 'react'
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';

const All = () => { 
    const products = useSelector(state => state.products);
    
    return (<div className="products">
        {products.map((product) => 
            <div className="product">
                <div className="proctn">
                    <img src={product.image} alt={product.description}/>
                    <h3>{product.title}</h3>
                    <h3>{product.price}</h3>
                </div>
                <div className="probtn">
                    <Button variant="outlined">Add to Cart</Button>
                </div>
            </div>
        )}</div>
    )}

export default All



// function All({productsData}) { 
    //     return (<div className="products">
    //         {productsData.map((item) => <div className="product">
    //             <h3>{item.title}</h3>
    //             <h3>{item.price}</h3>
    //             <img src={item.image} alt={item.description}/>
    //             </div>
    //         )}</div>
    //     )}

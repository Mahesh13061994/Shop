import React from 'react'
import {useSelector} from 'react-redux';

const Jewelery = () => {
    const products = useSelector(state => state.products);
    
    return (<div className="products">
    {products.filter((item) => item.category == "jewelery")
    .map((item) => <div className="product">
    <h3>{item.title}</h3>
    <h3>{item.price}</h3>
    <img src={item.image} alt={item.description}/>
    </div>
)}</div>
)
}

export default Jewelery

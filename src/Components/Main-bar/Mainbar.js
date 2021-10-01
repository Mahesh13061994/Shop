import React from 'react';
import {NavLink} from 'react-router-dom';
import {Brand, Cart} from '../../Assets/Images';

let Mainbar = () =>{
    return(
        <nav className="Mainbar">
            <div className="brand">
                <NavLink to='/'><img src={Brand} alt="Brand_logo" className="brand-logo" /></NavLink>
            </div>
            <div className="Main-logo">
                <input type="text" placeholder="Search your products, brands and more.." className="ipt"></input>
                <button type="submit" className="btn">Search</button>
            </div>
            <div>
                <NavLink to='/login'><button type="submit" className="login">Login</button></NavLink>
            </div>
            <div className="cart-div">
                <NavLink to='/cart'><img src={Cart} alt="Cart" className="cart" /></NavLink>
            </div>
        </nav>
    );
    
}

export default Mainbar;
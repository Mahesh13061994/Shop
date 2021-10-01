import './App.css';
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {set_Products} from '../Redux/Products/ProductsAction'
import Mainbar from './Main-bar/Mainbar';
import Menubar from './Menu-bar/Menubar';
import All from './All';
import MensClothing from './MensClothing';
import WomensClothing from './WomensClothing';
import Electronics from './Electronics';
import Jewelery from './Jewelery';

const App = () => {
  const products = useSelector(state => state);
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(set_Products());}, []);

  return (
    <Router>
    <div className="App">
        <Mainbar/>
        <Menubar/>
        <Route path="/all"><All /></Route>
        <Route path="/mensClothing"><MensClothing /></Route>
        <Route path="/womensClothing"><WomensClothing /></Route>
        <Route path="/electronics"><Electronics /></Route>
        <Route path="/jewelery"><Jewelery /></Route>
        {/* <Route path="/computers" component={Computers}/> */}
        {/* <Route path="/" exact><Welcome count={count} setCount={setCount} /></Route>  */}
        {/* <Route path="/" exact render={() => <Welcome count={count} setCount={setCount} /> }/> */}
        {/* <Route path="/" exact render={() => <Welcome/> }/> */}
        {/* <Route path="/login" component={Login} /> */}
    </div>
    </Router>
  );
};

export default App;



// const fetchProducts = () => (dispatch) => {
    //     axios
    //     .get("https://fakestoreapi.com/products")
    //     .then(response => 
    //       dispatch(set_Products(response.data)))
    //     .catch((err) => {
    //         console.log("err", err);
    //     });
    //     // dispatch(set_Products(response.data));
    // };
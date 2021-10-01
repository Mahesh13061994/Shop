import axios from 'axios';
import {ProductsActionTypes} from './ProductsActionTypes';

export const set_Products = () => async(dispatch) => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response);
    dispatch({
        type: ProductsActionTypes.SetProducts,
        payload: response.data,
    }) 
}
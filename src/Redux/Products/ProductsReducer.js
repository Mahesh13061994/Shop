import { ProductsActionTypes } from './ProductsActionTypes';

const initialState = {
    products:[],
}
export const ProductsReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ProductsActionTypes.SetProducts:
            return {...state, products: payload}
    }
}

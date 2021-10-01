import React from 'react';
// import {connect} from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Redux/Action';

const Welcome = () =>{
    const dispatch = useDispatch(); 
    const count = useSelector((state) => state);

    return(
        <div>
            <h1>Welcome!!!</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            {/* <button onClick={handleIncrement}>+</button> */}
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            {/* <button onClick={handleDecrement}>-</button> */}
        </div>
    );    
}
// const mapStateToProps = (state) =>{
//     return {
//         count: state
//     }
// }

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         handleIncrement: () => dispatch({type: "Increment"}),
//         handleDecrement: () => dispatch({type: "Decrement"})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Welcome);


export default Welcome;
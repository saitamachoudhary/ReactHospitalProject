import {configureStore} from '@reduxjs/toolkit';
import registerReducer from './RegisterSlice';
export default configureStore({
    reducer:{
        registerReducer
    }
})
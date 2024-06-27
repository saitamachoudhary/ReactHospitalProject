import {configureStore} from '@reduxjs/toolkit';
import registerReducer from './RegisterSlice';
import userinputReducer from './UserInputSlice';
export default configureStore({
    reducer:{
        registerReducer,
        userinputReducer
    }
})
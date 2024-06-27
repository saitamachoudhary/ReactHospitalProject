import { createSlice } from '@reduxjs/toolkit';

export const UserInputSlice = createSlice({
    name: 'UserInputSlice',
    initialState: {
        user: {}
    },
    reducers: {
        registerUserInput: (state, action) => {
            state.user = action.payload
            console.log('after' + state.user)
        },
        handleDeletePrescription: (state, action) => {
            state.user.Prescription = state.user.Prescription.filter((val) => val.id !== action.payload);
        },
        handleEmptyuser:(state)=>{
          state.user={}
        }
    }
})

export const { registerUserInput,handleDeletePrescription,handleEmptyuser} = UserInputSlice.actions;

export default UserInputSlice.reducer;
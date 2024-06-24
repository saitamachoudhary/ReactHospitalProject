import { createSlice} from '@reduxjs/toolkit';

export const Registerslice=createSlice({
  name:'RegisterUserPrescription',
  initialState:{
    Prescription:[]
  },
  reducers:{
    registerPrescription:(state,action)=>{
      state.Prescription.push(action.payload);
    },
    handleDelete:(state,action)=>{
     state.Prescription=state.Prescription.filter((val)=>val.id!==action.payload);
    }
  }
})

export const {registerPrescription,handleDelete} = Registerslice.actions;

export default Registerslice.reducer;


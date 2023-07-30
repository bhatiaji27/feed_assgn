import { createSlice } from '@reduxjs/toolkit'
import { fetchUserDetails } from '../actions/userActions'

const userSlice= createSlice({
name:"user",
initialState:{
    userDetails: {},
    userPicsDisplayStyle: 'ListView'
},
reducers:{
    fetchUser: (state, action)=>{
        state.userDetails = action.payload
    },
    updatePicDisplayStyle: (state, action) => {
        state.userPicsDisplayStyle = action.payload
    }
},
extraReducers(builder) {
    builder
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.userDetails = action.payload
      })
  },
})

export default userSlice.reducer

export const {fetchUser, updatePicDisplayStyle} = userSlice.actions
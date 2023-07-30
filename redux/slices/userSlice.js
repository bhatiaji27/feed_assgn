import { createSlice } from '@reduxjs/toolkit'
import { fetchUserDetails } from '../actions/userActions'

const userSlice= createSlice({
name:"user",
initialState:{
    userDetails: {},
    userPicsDisplayStyle: 'GridView',
    isLoadingUser: false
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
        state.isLoadingUser = false
      })
      .addCase(fetchUserDetails.pending, (state, action) => {
        state.isLoadingUser = true
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.userDetails = {}
        state.isLoadingUser = false
      })
  },
})

export default userSlice.reducer

export const {fetchUser, updatePicDisplayStyle, setLoading} = userSlice.actions
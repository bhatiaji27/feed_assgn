import { createSlice } from '@reduxjs/toolkit'
import { getARandomPhoto } from '../actions/photoActions'

const photoSlice= createSlice({
name:"photo",
initialState:{
    feedPhotos: [],
    isLoadingPhotos: true,
    error: {
    }
},
reducers:{
    addPhotoToState: (state, action)=>{
        state.feedPhotos = [...state.feedPhotos, action.payload]
    }
},
extraReducers(builder) {
    builder
      .addCase(getARandomPhoto.fulfilled, (state, action) => {
        state.feedPhotos = [...state.feedPhotos, action.payload]
        state.isLoadingPhotos = false
        state.error = {}
      })
      .addCase(getARandomPhoto.pending, (state, action) => {
        state.isLoadingPhotos = true
      }).addCase(getARandomPhoto.rejected, (state, action) => {
        state.isLoadingPhotos = false
        state.error = action.payload
      })
  },
})

export default photoSlice.reducer

export const {addPhotoToState} = photoSlice.actions
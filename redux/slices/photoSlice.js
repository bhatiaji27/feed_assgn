import { createSlice } from '@reduxjs/toolkit'
import { getARandomPhoto } from '../actions/photoActions'

const photoSlice= createSlice({
name:"photo",
initialState:{
    feedPhotos: [],
    isLoadingPhotos: true
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
      })
      .addCase(getARandomPhoto.pending, (state, action) => {
        state.isLoadingPhotos = true
        state.feedPhotos = []
      }).addCase(getARandomPhoto.rejected, (state, action) => {
        state.isLoadingPhotos = false
        state.feedPhotos = []
      })
  },
})

export default photoSlice.reducer

export const {addPhotoToState} = photoSlice.actions
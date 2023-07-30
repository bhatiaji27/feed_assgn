import { createSlice } from '@reduxjs/toolkit'
import { getARandomPhoto } from '../actions/photoActions'

const photoSlice= createSlice({
name:"photo",
initialState:{
    feedPhotos: [],
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
      })
  },
})

export default photoSlice.reducer

export const {addPhotoToState} = photoSlice.actions
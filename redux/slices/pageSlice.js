import { createSlice } from '@reduxjs/toolkit'

const pageSlice= createSlice({
name:"page",
initialState:{
    page: 0,
},
reducers:{
    increasePageCount: (state, action) => {
        state.page = state.page + 1
    },
},
})

export default pageSlice.reducer

export const {increasePageCount} = pageSlice.actions
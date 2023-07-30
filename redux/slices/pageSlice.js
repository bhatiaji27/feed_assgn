import { createSlice } from '@reduxjs/toolkit'

const pageSlice= createSlice({
name:"page",
initialState:{
    page: 0,
    pageChange: true,
},
reducers:{
    increasePageCount: (state, action) => {
        state.page = state.page + 1
        state.pageChange = true
    },
    updatePageChange: (state, action) => {
        state.pageChange = action.payload
    }
},
})

export default pageSlice.reducer

export const {increasePageCount, updatePageChange} = pageSlice.actions
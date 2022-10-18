import { createSlice } from '@reduxjs/toolkit'
export interface addToCartState {
    value: number
}

const initialState: addToCartState = {
    value: 0,

}
export const addToCartSlice = createSlice({
    name: 'addToCartSlice',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.push(action.payload);
        },


    },
})

// Action creators are generated for each case reducer function
export const { increment } = addToCartSlice.actions

export default addToCartSlice.reducer



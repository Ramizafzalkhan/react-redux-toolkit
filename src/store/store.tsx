import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './addToCartSlice'
export const cart = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof cart.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof cart.dispatch
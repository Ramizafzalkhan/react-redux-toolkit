import { configureStore } from '@reduxjs/toolkit'
export const cart = configureStore({
    reducer: {
        
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof cart.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof cart.dispatch
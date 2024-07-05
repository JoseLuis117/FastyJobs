import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../auth/authSlice";


const reduxStore = configureStore({
    reducer: {
        auth: authSlice,
    },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reduxStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxStore.dispatch
export default reduxStore
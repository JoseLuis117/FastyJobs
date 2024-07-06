import { createSlice } from "@reduxjs/toolkit";
export interface initialStateAuthProps {
    email: string | undefined,
    name: string | undefined,
    profession: string | undefined,
    id: string | undefined,
    imageUrl: string | undefined,
    balance: number | undefined
}
const initialState: initialStateAuthProps = {
    email: undefined,
    name: undefined,
    profession: undefined,
    id: undefined,
    imageUrl: undefined,
    balance: undefined
}
const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.email = payload.email;
            state.name = payload.name;
            state.profession = payload.profession;
            state.id = payload.id;
            state.profession = payload.profession;
            state.imageUrl = payload.imageUrl;
            state.balance = payload.balance;
        }
    },

})

export const { login } = auth.actions
export default auth.reducer
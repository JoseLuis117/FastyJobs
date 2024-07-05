"use client"
import reduxStore from "@/slices/store/reduxStore";
import { Provider } from "react-redux";

export default function layout({ children }: { children: React.ReactNode[] }) {
    return(
        <Provider store={reduxStore}>
            {children}
        </Provider>
    )
}
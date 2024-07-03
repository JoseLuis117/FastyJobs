import React from 'react'
export interface Props{
    title:string,
    className?:string
}
export const AlertTitle = ({title, className}:Props) => {
    return (
        <div className={`${className}`}>{title}</div>
    )
}

import React from 'react'
export interface Props{
    icon?:string,
    className?:string
}
export const AlertIcon = ({icon='fa-regular fa-circle-check', className}:Props) => {
    return (
        <i className={`${icon} ${className}`}></i>
    )
}

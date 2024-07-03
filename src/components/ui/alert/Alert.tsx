import React from 'react'
export interface Props {
    className?: string,
    backgroundColor?: string,
    children: React.ReactNode
    color?: string
}
export const Alert = ({ className, backgroundColor='bg-green-600', children, color='text-white' }: Props) => {
    return (
        <div className={`${backgroundColor} ${color}  ${className} p-4 rounded-lg`}>
            {children}
        </div>
    )
}

import React from 'react'
export interface CardProps {
    children: React.ReactNode,
    className?:string
}
export const PostCard = ({ children, className='' }: CardProps) => {
    return (
        <div className={`${className} shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4`}>
            {children}
        </div>
    )
}

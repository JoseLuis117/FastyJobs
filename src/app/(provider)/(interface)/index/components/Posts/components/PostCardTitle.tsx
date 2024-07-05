import React from 'react'
export interface TitleProps {
    className?: string,
    title: string
}
export const PostCardTitle = ({ className='', title }: TitleProps) => {
    return (
        <div className={`${className}`}>{title}</div>
    )
}

import React from 'react'
export interface ImageProps {
    images: string[],
    className?: string
}
export const PostCardImages = ({ className='', images }: ImageProps) => {
    return (
        <div className={`${className}`}>
            <img src={`${images[0]}`} alt={images[0]} className='w-full'/>
        </div>
    )
}

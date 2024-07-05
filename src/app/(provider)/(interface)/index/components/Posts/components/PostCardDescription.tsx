import React from 'react'
export interface DescriptionProps {
    classname?: string,
    description: string
}
export const PostCardDescription = ({ classname='', description }: DescriptionProps) => {
    return (
        <div className={`${classname}`}>{description}</div>
    )
}

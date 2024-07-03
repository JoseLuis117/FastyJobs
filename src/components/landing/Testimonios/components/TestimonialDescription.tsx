import React from 'react'
export interface Props {
    className?: string,
    description: string
}
export const TestimonialDescription = ({ className, description }: Props) => {
    return (
        <div className={`${className}`}>{description}</div>
    )
}

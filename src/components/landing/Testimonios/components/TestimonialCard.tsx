import React from 'react'
export interface Props {
    children: React.ReactElement | React.ReactElement[],
    className?: string
}
export const TestimonialCard = ({ children, className }: Props) => {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    )
}

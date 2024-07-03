import React from 'react'
export interface Props {
    description: string,
    className?: string
}
export const CardDescription = ({ description, className='' }: Props) => {
    return (
        <div className={`${className}`}>{description}</div>
    )
}

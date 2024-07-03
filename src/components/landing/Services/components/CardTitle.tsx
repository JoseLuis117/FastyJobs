import React from 'react'
export interface Props {
    title: string,
    className?: string
}
export const CardTitle = ({ title, className='' }: Props) => {
    return (
        <h5 className={`${className}`}>{title}</h5>
    )
}

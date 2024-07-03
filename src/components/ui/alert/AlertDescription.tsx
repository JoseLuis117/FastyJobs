import React from 'react'
export interface Props {
    description: string,
    className?: string
}
export const AlertDescription = ({ className, description }: Props) => {
    if (description) {
        return (
            <div className={`${className}`}>{description}</div>
        )
    }
}

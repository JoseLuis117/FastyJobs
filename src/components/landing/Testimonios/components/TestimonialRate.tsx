import React from 'react'
export interface Props {
    rate: number,
    className?: string
}

export const TestimonialRate = ({ rate, className }: Props) => {
    let starsComponent: any[] = [];
    for (let index = 0; index < 5; index++) {
        if (index < rate) {
            starsComponent.push(<i className="fa-solid fa-star text-amber-400"></i>);
        } else {
            starsComponent.push(<i className="fa-solid fa-star text-gray-500"></i>);
        }
    }
    return (
        <div className='flex'>
            {starsComponent.map((value, index) => (
                <div key={index} className={`${className}`}>
                    {value}
                </div>
            ))}
        </div>
    )
}

import { Chip } from '@nextui-org/chip'
import React from 'react'
export interface MetadataProps {
    category: string,
    createAt: string,
    ubicacion: string,
    className?: string
}
const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}
export const PostCardMetadata = ({ category, createAt, ubicacion, className='' }: MetadataProps) => {
    return (
        <div className={`${className} flex flex-wrap gap-4`}>
            <Chip className='w-full' color="primary" variant="bordered">{truncateText(category,14)}</Chip>
            <Chip className='w-full' color="secondary" variant="bordered">{createAt}</Chip>
            <Chip className='w-full' color="warning" variant="bordered" startContent={<i className="fa-solid fa-location-dot"></i>}>{truncateText(ubicacion,12)}</Chip>
        </div>
    )
}

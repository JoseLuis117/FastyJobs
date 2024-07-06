import { User } from '@nextui-org/user'
import React from 'react'
export interface UserProps {
    name: string,
    profesion: string,
    imageUrl: string,
    className?:string,
    descriptionColor?:string,
    nameColor?:string,
}
export const PostCardUser = ({ name, profesion, imageUrl, className='', descriptionColor='', nameColor='' }: UserProps) => {
    return (
        <User
            name={name}
            description={profesion}
            avatarProps={{
                src: imageUrl
            }}
            className={`${className}`}
            classNames={{
                description:descriptionColor,
                wrapper:nameColor
            }}
        />
    )
}

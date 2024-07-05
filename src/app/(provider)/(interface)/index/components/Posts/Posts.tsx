"use client"
import React, { useState } from 'react'
import { PostCard } from './components'
import { Button } from '@nextui-org/button'
import { PostsData } from './data/PostsData'
import Link from 'next/link'

export const Posts = () => {
    const [changeColor, setChangeColor] = useState(false);
    return (
        <div className='container mx-auto my-10 px-4'>
            <div className='flex gap-4'>
                <Link href={'/createPost'}>
                    <Button color='primary'>Crear publicación</Button>
                </Link>
                <Button color='primary'>Ver mis publicaciones</Button>
            </div>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(380px,1fr))] mt-10 gap-8'>
                {PostsData.map((post) =>
                (
                    <PostCard key={post.title} className='space-y-4 '>
                        <PostCard.User descriptionColor='' imageUrl={post.imageProfileUrl} name={post.userName} profesion={post.profession} />
                        <PostCard.Title className='text-xl font-medium' title={post.title} />
                        <PostCard.Description classname='text-gray-600' description={post.description} />
                        <PostCard.Images images={post.images} />
                        <PostCard.Metadata category={post.category} createAt={post.createAt} ubicacion={post.ubicacion} />
                    </PostCard>
                )
                )}
            </div>
        </div>
    )
}

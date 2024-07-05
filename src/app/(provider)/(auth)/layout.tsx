"use client"
import { login } from '@/slices/auth/authSlice'
import reduxStore from '@/slices/store/reduxStore'
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'

export default function layout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        async function verifySession() {
            const supabase = createClient();
            const { error, data } = await supabase.auth.getUser()
            if (!error) {
                const userEmail = data.user?.email;
                const name = data.user?.user_metadata.name;
                const profession = data.user?.user_metadata.profession;
                const imageUrl = data.user?.user_metadata.imageUrl;
                const id = data.user?.id;
                const userData = Object.assign({
                    email:userEmail,
                    name:name,
                    profession:profession,
                    imageUrl,
                    id:id
                })
                dispatch(login(userData))
                router.push('/index');
            }
        }
        verifySession();
    }, [])
    return (
        <Provider store={reduxStore}>
            <main className='h-screen w-screen grid lg:grid-cols-3'>
                <div className='col-span-1 p-8 flex flex-col justify-between'>
                    <header className='flex gap-1 items-center'>
                        <Image src={'icons/logoBlack.svg'} width={50} height={50} alt='FastyJobs Icon' />
                        <h1 className='text-2xl font-semibold'>FastyJobs</h1>
                    </header>
                    {children}
                </div>
                <div className='col-span-2 bg-login hidden lg:flex'>
                </div>
            </main>
        </Provider>
    )
}

"use client"
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    useEffect(() => {
        async function verifySession() {
            const supabase = createClient();
            const { error } = await supabase.auth.getUser()
            if (!error) {
                router.push('/index');
            }
        }
        verifySession();
    }, [])
    return (
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
    )
}

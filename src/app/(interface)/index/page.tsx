import React from 'react'
import { Header, Posts } from './components'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
export default async function page() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return (
        <>
            <Header />
            <Posts />
        </>
    )
}

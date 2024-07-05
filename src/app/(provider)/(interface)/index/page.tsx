import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import React from 'react'
import { Header, Posts } from './components'
export default async function page() {
    return (
        <>
            <Header />
            <Posts />
        </>
    )
}

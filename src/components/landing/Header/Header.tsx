import React from 'react'
import { NavbarHeader } from './components'

export function Header() {
    return (
        <>
            <NavbarHeader />
            <header id="home" className='min-h-[800px]'>
                <div className="absolute z-10 w-full h-full">

                    <div className='relative'>
                        <div className="flex bg-img justify-center items-center h-full flex-col gap-4 absolute px-5">
                            <div className="z-10 relative border-animation text-white px-4 py-2 max-w-[370px] w-full text-center h-[70px] text-3xl font-bold flex items-center justify-center">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <h1 className="z-10 text-white text-base max-w-[900px] text-center tracking-[0.2em] font-light animate-[movex_1s_ease-in-out]">
                                Tu plataforma para encontrar oportunidades laborales o talento calificado para tu empresa.
                            </h1>
                        </div>
                        <div className="w-full bg-black opacity-50 absolute z-0 min-h-[700px]"></div>

                    </div>
                </div>
            </header>
        </>
    )
}

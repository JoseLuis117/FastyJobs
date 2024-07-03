"use client"
import React, { useRef } from 'react'
import { Card } from './components'
import { ServicesData } from './data/ServicesData'

export const Services = () => {
    const handleHover = (ref: React.RefObject<HTMLDivElement>) => () => ref.current?.classList.add('!text-white')
    const handleLeftHover = (ref: React.RefObject<HTMLDivElement>) => () => ref.current?.classList.remove('!text-white')
    return (
        <main className='container m-auto px-4' id='services'>
            <div>
                <div className='space-y-6'>
                    <h4 className='text-base text-primary text-center mb-6 font-semibold'>Nuestros servicios</h4>
                    <h4 className='text-3xl font-bold text-center'>Todo lo que necesitas como trabajador y empleador</h4>
                    <div className='flex justify-center'>
                        <p className='max-w-[800px] text-center'>Todas las funcionalidades necesarias para poder aumentar tus posibilidades de encontrar un trabajo y siempre con la seguridad de que tus datos estan seguros con nosotros</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center justify-center xl:flex-row flex-col mt-[80px]'>
                    {ServicesData.map((service) => {
                        const iconRef = useRef<HTMLDivElement>(null)
                        return (
                            <Card key={service.id} className="flex flex-col gap-6 p-8 hover:bg-primary hover:text-white hover:shadow-md hover:shadow-primary" handleHover={handleHover(iconRef)} onMouseLeave={handleLeftHover(iconRef)}>
                                <div className='flex gap-4 items-center'>
                                    <Card.Icon icon={service.icon} className='text-primary text-2xl' ref={iconRef} />
                                    <Card.Title title={service.title} className='font-semibold' />
                                </div>
                                <Card.Description description={service.description} className='leading-8'/>
                            </Card>
                        )
                    })}
                </div>
            </div>

        </main>
    )
}

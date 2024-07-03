import React from 'react'
import { ImageGrid } from './components'

export const About = () => {
    return (
        <div className='container m-auto mt-[150px] px-4' id='about'>
            <div className='flex gap-8 items-center lg:flex-row flex-col'>
                <div className='space-y-5 max-w-[700px]'>
                    <h2 className='text-6xl font-semibold'>Innovando la forma de conectar personas</h2>
                    <p className='leading-8'>En Fasty Jobs, estamos comprometidos a conectar a trabajadores talentosos con oportunidades laborales emocionantes en diversas industrias. Nuestra plataforma ofrece una amplia gama de proyectos, desde residenciales hasta comerciales, para que los profesionales puedan encontrar el trabajo perfecto que se ajuste a sus habilidades y pasiones.</p>
                </div>
                <ImageGrid />
            </div>
        </div>
    )
}

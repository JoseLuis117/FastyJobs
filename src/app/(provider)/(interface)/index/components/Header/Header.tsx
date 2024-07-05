import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import React from 'react'

export const Header = () => {
    return (
        <div className='bg-[url("https://img.freepik.com/foto-gratis/hombre-trabaja-sonido-computadora-portatil-temprano-manana_169016-26761.jpg?t=st=1720064262~exp=1720067862~hmac=94de986feebc49ea3c71939acd0c976710223b95c952230ef102500940b671c6&w=1380")]
        min-h-[500px] bg-cover bg-center'>
            <div className='w-full flex justify-center items-center h-[500px] flex-col gap-4'>
                <h1 className='text-3xl text-white'>¿Buscas una publicacion en especifico?</h1>
                <div className='w-full flex justify-center'>
                    <Input placeholder='Ej. Sitio web' type='text' className='max-w-[600px]' classNames={{ inputWrapper: 'rounded-none' }} startContent={<i className="fa-solid fa-magnifying-glass"></i>} />
                    <Button type='submit' color='primary' className='rounded-none'>
                        Buscar
                    </Button>
                </div>
            </div>
        </div>
    )
}

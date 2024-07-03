"use client"
import { Alert } from '@/components'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface FormInputs {
    name: string,
    email: string,
    password: string
}
interface responseTypes {
    error?: string,
    message?: string
    ok: boolean
}
export default function page() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const [error, setError] = useState<string>('');
    const [ok, setOk] = useState<string>('');
    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        const response = await fetch('api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result: responseTypes = await response.json();
        if (result.ok) {
            setOk(result.message!);
        } else {
            setError(result.error!);
        }
    }


    return (
        <>
            <div className='flex flex-col gap-8 px-6'>
                {ok &&
                    <Alert>
                        <div className='flex gap-2 items-center'>
                            <Alert.Icon />
                            <Alert.Title title='¡Registro exitoso!' />
                        </div>
                        <Alert.Description description='Te enviamos un correo electronico, verifica tu cuenta para continuar.' />
                    </Alert>}
                {error &&
                    <Alert backgroundColor='bg-red-600'>
                        <div className='flex gap-2 items-center'>
                            <Alert.Icon icon='fa-regular fa-circle-xmark' />
                            <Alert.Title title='¡Error al registrarse!' />
                        </div>
                        <Alert.Description description={error} />
                    </Alert>}
                <div>
                    <h2 className='text-xl'>Registrarse</h2>
                    <p className='text-gray-500'>¿Eres nuevo? Create una cuenta para continuar</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} noValidate className='flex flex-col gap-8'>
                    <div>
                        <Input {...register("name", { required: true })} type='text' label="Nombre" variant='bordered' color='primary' labelPlacement='outside' placeholder='Tu nombre'
                            classNames={{
                                inputWrapper: 'border-gray-200 border-small',
                                label: 'text-black'
                            }} />
                        {errors.name && <span className='text-red-700 text-sm text-center'>El nombre no puede ir vacio</span>}
                    </div>
                    <div>
                        <Input  {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} type='email' label="Correo" variant='bordered' color='primary' labelPlacement='outside' placeholder='Tu correo'
                            classNames={{
                                inputWrapper: 'border-gray-200 border-small',
                                label: 'text-black'
                            }} />
                        {errors.email && <span className='text-red-700 text-sm text-center'>El correo no es valido</span>}
                    </div>
                    <div>
                        <Input {...register("password", { required: true, minLength: 6 })} type='password' label="Contraseña" variant='bordered' color='primary' labelPlacement='outside' placeholder='Tu contraseña'
                            classNames={{
                                inputWrapper: 'border-gray-200 border-small',
                                label: 'text-black'
                            }} />
                        {errors.password && <span className='text-red-700 text-sm text-center'>La contraseña debe tener al menos 6 caracteres</span>}
                    </div>
                    <Button color='primary' type='submit'>
                        Registrarse
                    </Button>
                    <p className='text-gray-500 text-center'>Tambien puedes iniciar sesión con tus redes sociales</p>
                    <div className='flex justify-center'>
                        <Button className='bg-red-500 rounded-lg py-1 px-10 hover:-translate-y-1 transition-all'>
                            <i className="fa-brands fa-google text-white"></i>
                        </Button>
                    </div>
                </form>
            </div>
            <div className='flex gap-1 justify-center'>
                <p className='text-gray-500'>¿Ya tienes una cuenta?</p>
                <Link href={'register'} className='text-primary'>Inicia sesión</Link>
            </div>
        </>
    )
}

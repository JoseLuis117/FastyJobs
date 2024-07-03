"use client"
import { useSearchParams } from 'next/navigation'
import { Button } from '@nextui-org/button'
import { Checkbox } from '@nextui-org/checkbox'
import { Input } from '@nextui-org/input'
import Link from 'next/link'
import React, { useState } from 'react'
import { Alert } from '@/components'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

interface FormInputs {
    email: string,
    password: string
}
interface responseTypes {
    error?: string,
    message?: string
    ok: boolean
}
export default function page() {
    const [isSelected, setIsSelected] = React.useState(false);
    const router = useRouter();
    const searchParams = useSearchParams()
    const search = searchParams.get('confirmed')

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const [error, setError] = useState<string>('');
    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        const response = await fetch('api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result: responseTypes = await response.json();
        console.log(result);
        if (result.ok) {
            router.push('/index')
        } else {
            setError(result.error!);
        }
    }
    return (
        <>
            <div className='flex flex-col gap-8'>
                {search &&
                    <Alert>
                        <div className='flex gap-2 items-center'>
                            <Alert.Icon />
                            <Alert.Title title='Ya puedes iniciar sesión' />
                        </div>
                    </Alert>}
                {error &&
                    <Alert backgroundColor='bg-red-600'>
                        <div className='flex gap-2 items-center'>
                            <Alert.Icon icon='fa-regular fa-circle-xmark' />
                            <Alert.Title title='¡Error al iniciar sesión!' />
                        </div>
                        <Alert.Description description={error} />
                    </Alert>}
                <div>
                    <h2 className='text-xl'>Inicia sesión</h2>
                    <p className='text-gray-500'>Bienvenido denuevo, inicia sesión para continuar</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} noValidate className='flex flex-col gap-8'>
                    <Input  {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} type='email' label="Correo" variant='bordered' color='primary' labelPlacement='outside' placeholder='Tu correo'
                        classNames={{
                            inputWrapper: 'border-gray-200 border-small',
                            label: 'text-black'
                        }} />
                    <Input {...register("password", { required: true, minLength: 6 })} type='password' label="Contraseña" variant='bordered' color='primary' labelPlacement='outside' placeholder='Tu contraseña'
                        classNames={{
                            inputWrapper: 'border-gray-200 border-small',
                            label: 'text-black'
                        }} />
                    <Checkbox defaultSelected color="primary" isSelected={isSelected} onValueChange={setIsSelected} classNames={{ label: 'text-black text-sm' }}>Recordar mis credenciales</Checkbox>
                    <Button color='primary' type='submit'>
                        Iniciar sesión
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
                <p className='text-gray-500'>¿No tienes una cuenta?</p>
                <Link href={'register'} className='text-primary'>Crear una cuenta</Link>
            </div>
        </>
    )
}

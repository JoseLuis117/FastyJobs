"use client"
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';
import React, { useEffect, useState } from 'react';
import { useSession } from '../hooks/useSession';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormInputs {
    name: string,
    description: string,
    location: string,
    tel: string
}

export default function Page() {
    const { name, email, profession, balance, imageUrl, id, tel, location, description } = useSession();

    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<FormInputs>();

    useEffect(() => {
        console.log("Name");
        console.log(name);
        reset({
            name,
            description,
            location,
            tel
        });
    }, [name]);

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        console.log(data);
    };

    return (
        <div className='container m-auto flex flex-col lg:flex-row mt-20 gap-6 px-4'>
            <Button onClick={() => console.log(name)}>asdasd</Button>
            <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-t-primary border-t-4 w-full text-black lg:max-w-[400px] flex flex-col items-center gap-4 p-8'>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-[250px] h-[250px] text-4xl" name={name} />
                <div className='flex flex-col gap-2 w-full'>
                    <h2 className='text-3xl'>{name}</h2>
                    <hr />
                </div>
                <div className='flex flex-col justify-start gap-6 w-full'>
                    <div>
                        <p>{description}</p>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <div className='flex gap-2 items-center'>
                            <i className="fa-solid fa-location-dot"></i>
                            <p>{location}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <i className="fa-solid fa-user-tie"></i>
                            <p>{profession}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <i className="fa-solid fa-phone"></i>
                            <p>{tel}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <i className="fa-solid fa-at"></i>
                            <p>{email}</p>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-full h-full'>
                <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full text-black flex flex-col gap-4 p-8'>
                    <h1 className='text-2xl text-center'>Editar perfil</h1>
                    <p className='text-primary'>Datos personales</p>
                    <div className='space-y-4'>
                        <Input {...register("name", { value: name })} label='Nombre' placeholder='Tu nombre' variant='bordered'  />
                        <Textarea {...register("description")} variant='bordered' label='Biografía' placeholder='Agrega tu biografía' className='col-span-12 md:col-span-6 mb-6 md:mb-0' />
                    </div>
                </div>
                <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full text-black flex flex-col gap-4 p-8'>
                    <p className='text-primary'>Datos de contacto</p>
                    <div className='space-y-4'>
                        <Input {...register("location")} label='Ubicación' placeholder='Ej. Francisco I. Madero 46, Coapa, Ejido Viejo de Sta Úrsula Coapa, Coyoacán, 04980 Ciudad de México, CDMX' variant='bordered' />
                        <Input {...register("tel")} label='Telefono' placeholder='Ej. +52  5569382066' variant='bordered' />
                        <Button color='primary' variant='ghost' className='w-full' type='submit'>
                            Actualizar
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

"use client"
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import React, { useEffect, useState } from 'react';
import { useSession } from '../hooks/useSession';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
import { Alert } from '@/components';
import { AlertTitle } from '@/components/ui/alert/AlertTitle';
import { AlertDescription } from '@/components/ui/alert/AlertDescription';

interface FormInputs {
    name: string,
    description: string,
    location: string,
    tel: string
    image: FileList,
    profession:string
}
interface responseDataType {
    ok: boolean,
    error?: string,
    message?: string
}
export default function Page() {
    const { name, email, profession, imageUrl, id, tel, location, description, refreshUserData } = useSession();
    
    const { register, handleSubmit,  formState: { errors }, reset, watch } = useForm<FormInputs>();
    const [error, setError] = useState("");
    const [ok, setOk] = useState("");
    useEffect(() => {
        reset({
            name,
            description,
            location,
            tel,
            profession
        });
    }, [name]);

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        const newData = Object.assign(data, {
            id
        });
        console.log(newData)
        const formData = new FormData();
        formData.append('id', newData.id);
        formData.append('name', newData.name);
        formData.append('description', newData.description);
        formData.append('location', newData.location);
        formData.append('tel', newData.tel);
        formData.append('image', newData.image[0]);
        formData.append('profession', newData.profession);
        console.log("New data", formData);

        const response = await fetch(`${process.env.NEXT_PUBLIC_FRONT_URL}/api/user/updateUser`, {
            method: "POST",
            body: formData,
        })
        const updateData: responseDataType = await response.json();
        if (updateData.ok) {
            refreshUserData()
            setOk("Datos actualizados correctamente")
        } else {
            setError("Error al actualizar los datos")
        } 

    };
    return (
        <div className='container m-auto '>

            <div className='flex flex-col lg:flex-row mt-20 gap-6 px-4'>
                <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-t-primary border-t-4 w-full text-black lg:max-w-[400px] flex flex-col items-center gap-4 p-8'>
                    <Avatar src={imageUrl} className="w-[250px] h-[250px] text-4xl" name={name} />
                    <div className='flex flex-col gap-2 w-full'>
                        <h2 className='text-3xl'>{name}</h2>
                        <hr />
                    </div>
                    <div className='flex flex-col justify-start gap-6 w-full'>
                        <div>
                            <p>{description ? description : "Sin biografía"}</p>
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
                        {error && <Alert backgroundColor='bg-red-600'>
                            <div className='flex gap-2 items-center'>
                                <Alert.Icon icon='fa-regular fa-circle-xmark' />
                                <AlertTitle title='Ah ocurrido un error al actualizar tus datos' />
                            </div>
                            <AlertDescription description={ok} />
                        </Alert>}
                        {ok && <Alert>
                            <div className='flex gap-2 items-center'>
                                <Alert.Icon />
                                <AlertTitle title='Datos actualizados correctamente' />
                            </div>
                        </Alert>}
                        <h1 className='text-2xl text-center'>Editar perfil</h1>
                        <p className='text-primary'>Datos personales</p>

                        <div className='space-y-4'>
                            <div className="group flex flex-col data-[hidden=true]:hidden w-full" data-slot="base" data-filled="true" data-filled-within="true" data-has-elements="true" data-has-label="true">
                                <div data-slot="input-wrapper" className="relative w-full inline-flex tap-highlight-transparent shadow-sm px-3 border-medium border-default-200 data-[hover=true]:border-default-400 group-data-[focus=true]:border-default-foreground min-h-10 rounded-medium flex-col items-start justify-center gap-0  !duration-150 transition-colors motion-reduce:transition-none h-14 py-2" style={{ cursor: "text" }}>
                                    <label htmlFor='react-aria-:R3bjtt7qcq:' data-slot="label" className="absolute z-10 pointer-events-none origin-top-left rtl:origin-top-right subpixel-antialiased block text-foreground-500 cursor-text will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:text-default-600 group-data-[filled-within=true]:pointer-events-auto group-data-[filled-within=true]:scale-85 text-small group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px_-_theme(borderWidth.medium))] pe-2 max-w-full text-ellipsis overflow-hidden" id="react-aria-:R3bjtt7qcqH1:">
                                        Nombre
                                    </label>
                                    <div data-slot="inner-wrapper" className="inline-flex w-full items-center h-full box-border group-data-[has-label=true]:items-end">
                                        <input {...register("name")} data-slot="input" className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small" aria-label="Ubicación" type="text" placeholder="Ej. Francisco I. Madero 46, Coapa, Ejido Viejo de Sta Úrsula Coapa, Coyoacán, 04980 Ciudad de México, CDMX" id="react-aria-:R3bjtt7qcq:" aria-labelledby="react-aria-:R3bjtt7qcq: react-aria-:R3bjtt7qcqH1:" />
                                    </div>
                                </div>
                            </div>
                            <div data-slot="input-wrapper" className="relative w-full inline-flex tap-highlight-transparent shadow-sm px-3 border-medium border-default-200 data-[hover=true]:border-default-400 group-data-[focus=true]:border-default-foreground min-h-10 rounded-medium flex-col items-start justify-center gap-0 !h-auto !duration-150 transition-colors motion-reduce:transition-none py-2" data-has-multiple-rows="true" style={{ cursor: "text" }} data-focus="true">
                                <label data-slot="label" className="z-10 pointer-events-none origin-top-left rtl:origin-top-right subpixel-antialiased block text-foreground-500 cursor-text relative will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:text-default-600 group-data-[filled-within=true]:pointer-events-auto group-data-[filled-within=true]:scale-85 text-small pb-0.5 pe-2 max-w-full text-ellipsis overflow-hidden" id="react-aria6041105407-:r1:" htmlFor="react-aria6041105407-:r0:">
                                    Biografía
                                </label>
                                <div data-slot="inner-wrapper" className="inline-flex w-full h-full box-border items-start group-data-[has-label=true]:items-start">
                                    <textarea {...register("description")} data-slot="input" className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small resize-none data-[hide-scroll=true]:scrollbar-hide pt-0 transition-height !duration-100 motion-reduce:transition-none" aria-label="Biografía" name="description" placeholder="Agrega tu biografía" id="react-aria6041105407-:r0:" aria-labelledby="react-aria6041105407-:r0: react-aria6041105407-:r1:" data-hide-scroll="true" style={{ height: "60px !important" }} data-filled-within="true">
                                    </textarea>
                                </div>
                            </div>
                            <div className="group flex flex-col data-[hidden=true]:hidden w-full" data-slot="base" data-filled="true" data-filled-within="true" data-has-elements="true" data-has-label="true">
                                <div data-slot="input-wrapper" className="relative w-full inline-flex tap-highlight-transparent shadow-sm px-3 border-medium border-default-200 data-[hover=true]:border-default-400 group-data-[focus=true]:border-default-foreground min-h-10 rounded-medium flex-col items-start justify-center gap-0  !duration-150 transition-colors motion-reduce:transition-none h-14 py-2" style={{ cursor: "text" }}>
                                    <label htmlFor='react-aria-:R3bjtt7qcq:' data-slot="label" className="absolute z-10 pointer-events-none origin-top-left rtl:origin-top-right subpixel-antialiased block text-foreground-500 cursor-text will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:text-default-600 group-data-[filled-within=true]:pointer-events-auto group-data-[filled-within=true]:scale-85 text-small group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px_-_theme(borderWidth.medium))] pe-2 max-w-full text-ellipsis overflow-hidden" id="react-aria-:R3bjtt7qcqH1:">
                                        Profesión
                                    </label>
                                    <div data-slot="inner-wrapper" className="inline-flex w-full items-center h-full box-border group-data-[has-label=true]:items-end">
                                        <input {...register("profession")} data-slot="input" className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small" aria-label="Ubicación" type="text" placeholder="Ej. Ingeniero en sistemas" id="react-aria-:R3bjtt7qcq:" aria-labelledby="react-aria-:R3bjtt7qcq: react-aria-:R3bjtt7qcqH1:" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full items-center bg-grey-lighter">
                                <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue">
                                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                    </svg>
                                    <span className="mt-2 text-base leading-normal">Foto de perfil</span>
                                    {watch('image') && <p className="text-sm text-gray-600 mt-2">Archivo seleccionado: {watch('image')[0]?.name}</p>}

                                    <input {...register("image")} type='file' accept='.jpeg, .jpg, .png' className="hidden" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full text-black flex flex-col gap-4 p-8'>
                        <p className='text-primary'>Datos de contacto</p>
                        <div className='space-y-4'>
                            <div className="group flex flex-col data-[hidden=true]:hidden w-full" data-slot="base" data-filled="true" data-filled-within="true" data-has-elements="true" data-has-label="true">
                                <div className="relative w-full inline-flex tap-highlight-transparent shadow-sm px-3 border-medium border-default-200 data-[hover=true]:border-default-400 group-data-[focus=true]:border-default-foreground min-h-10 rounded-medium flex-col items-start justify-center gap-0 !duration-150 transition-colors motion-reduce:transition-none h-14 py-2" style={{ cursor: 'text' }}>
                                    <label className="absolute z-10 pointer-events-none origin-top-left rtl:origin-top-right subpixel-antialiased block text-foreground-500 cursor-text will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:text-default-600 group-data-[filled-within=true]:pointer-events-auto group-data-[filled-within=true]:scale-85 text-small group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px_-_theme(borderWidth.medium))] pe-2 max-w-full text-ellipsis overflow-hidden" id="react-aria-:R3ajtt7qcqH1:" htmlFor="react-aria-:R3ajtt7qcq:">Ubicación</label>
                                    <div className="inline-flex w-full items-center h-full box-border group-data-[has-label=true]:items-end">
                                        <input
                                            {...register("location")}
                                            className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small"
                                            aria-label="Ubicación"
                                            type="text"
                                            placeholder="Ej. Francisco I. Madero 46, Coapa, Ejido Viejo de Sta Úrsula Coapa, Coyoacán, 04980 Ciudad de México, CDMX"
                                            id="react-aria-:R3ajtt7qcq:"
                                            aria-labelledby="react-aria-:R3ajtt7qcq react-aria-:R3ajtt7qcqH1:"
                                            name="location"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="group flex flex-col data-[hidden=true]:hidden w-full" data-slot="base" data-filled="true" data-filled-within="true" data-has-elements="true" data-has-label="true">
                                <div className="relative w-full inline-flex tap-highlight-transparent shadow-sm px-3 border-medium border-default-200 data-[hover=true]:border-default-400 group-data-[focus=true]:border-default-foreground min-h-10 rounded-medium flex-col items-start justify-center gap-0 !duration-150 transition-colors motion-reduce:transition-none h-14 py-2" style={{ cursor: 'text' }}>
                                    <label className="absolute z-10 pointer-events-none origin-top-left rtl:origin-top-right subpixel-antialiased block text-foreground-500 cursor-text will-change-auto !duration-200 !ease-out motion-reduce:transition-none transition-[transform,color,left,opacity] group-data-[filled-within=true]:text-default-600 group-data-[filled-within=true]:pointer-events-auto group-data-[filled-within=true]:scale-85 text-small group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px_-_theme(borderWidth.medium))] pe-2 max-w-full text-ellipsis overflow-hidden" htmlFor="telefono">Telefono</label>
                                    <div className="inline-flex w-full items-center h-full box-border group-data-[has-label=true]:items-end">
                                        <input
                                            {...register("tel")}
                                            className="w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none data-[has-start-content=true]:ps-1.5 data-[has-end-content=true]:pe-1.5 text-small"
                                            aria-label="Telefono"
                                            type="text"
                                            placeholder="Ej. +52  5569382066"
                                            id="telefono"
                                            aria-labelledby="telefono telefono-label"
                                            name="tel"
                                        />
                                    </div>
                                </div>
                            </div>
                            <Button color='primary' variant='ghost' className='w-full' type='submit'>
                                Actualizar
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

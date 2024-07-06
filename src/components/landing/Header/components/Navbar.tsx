"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

export interface Props {
    footer?: boolean
    children?: React.ReactNode,
    href?:string
}
export const NavbarHeader = ({ footer = false, href="#home", children }: Props) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "INICIO",
        "NUESTROS SERVICIOS",
        "SOBRE NOSOTROS",
        "TESTIMONIOS",
        "INICIAR SESIÓN",
    ];
    return (

        <>
            <Navbar
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                className='h-20 bg-background/100'
                isBlurred={false}
                classNames={{
                    toggleIcon: "after:bg-white before:bg-white",
                    base: footer ? "static" : "sticky",
                    menu: 'mt-4'
                }}
            >
                <NavbarContent>
                    {!footer && <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="lg:hidden"
                    />}
                    <a href={href} className='text-white'>
                        <NavbarBrand className='flex gap-3'>
                            <Image src={'icons/logo.svg'} width={50} height={50} alt='FastyJobs Icon' />
                            <p className="font-bold text-white">FASTYJOBS</p>
                        </NavbarBrand>
                    </a>
                </NavbarContent>

                {children ? children :
                    <>
                        <NavbarContent className="hidden lg:flex gap-8" justify="center">
                            <NavbarItem>
                                <a href="#home" className='hover:text-titles text-white'>
                                    INICIO
                                </a>
                            </NavbarItem>
                            <NavbarItem >
                                <a href="#services" color="foreground" className='hover:text-titles text-white' aria-current="page">
                                    NUESTROS SERVICIOS
                                </a>
                            </NavbarItem>
                            <NavbarItem>
                                <a color="foreground" className='hover:text-titles text-white' href="#about">
                                    SOBRE NOSOTROS
                                </a>
                            </NavbarItem>
                            <NavbarItem>
                                <a color="foreground" className='hover:text-titles text-white' href="#testimonials">
                                    TESTIMONIOS
                                </a>
                            </NavbarItem>
                        </NavbarContent>
                        <NavbarContent justify="end">
                            <NavbarItem>
                                <Link href="login">
                                    <Button variant='solid' color='primary' className='text-xs sm:text-sm'>
                                        INICIAR SESIÓN
                                    </Button>
                                </Link>
                            </NavbarItem>
                        </NavbarContent>
                        <NavbarMenu>
                            {menuItems.map((item, index) => (
                                <NavbarMenuItem key={`${item}-${index}`}>
                                    <Link
                                        className="w-full text-white"
                                        href="#"
                                        size="lg"
                                    >
                                        {item}
                                    </Link>
                                </NavbarMenuItem>
                            ))}
                        </NavbarMenu>
                    </>
                }

            </Navbar>
            {footer &&
                <div className='bg-background p-4'>
                    <div className='flex justify-center'>
                        <span className='text-white'>
                            &copy; {new Date().getFullYear()} - Todos los derechos reservados José Luis Sánchez Mendoza
                        </span>
                    </div>
                </div>
            }
        </>
    )
}

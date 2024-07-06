"use client"
import { NavbarHeader } from "@/components/landing/Header/components";
import { createClient } from "@/utils/supabase/client";
import { Avatar } from "@nextui-org/avatar";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { Link } from "@nextui-org/link";
import { NavbarContent, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSession } from "./hooks/useSession";
export default function layout({ children }: { children: React.ReactNode[] }) {
    const router = useRouter();
    const {imageUrl, name, balance} = useSession();
    const closeSession = async () => {
        const supabase = createClient();
        const { error } = await supabase.auth.signOut();
        if (!error) {
            router.push('/');
        }
    }
    const menuItems = [
        {
            text: "INICIO",
            href: "/profile"
        },
        {
            text: "RECARGAR SALDO",
            href: "/index/balance"
        },
        {
            text: "CREAR PUBLICACIÓN ",
            href: "/index/create-post"
        },
        {
            text: "Cerrar session",
            href: "#"
        }
    ];
    return (
        <>
            <NavbarHeader href="/index">
                <NavbarContent as="div" justify="end">
                    <div className="ml-4 flex gap-2 items-center">
                        <i className="fa-regular fa-credit-card text-white text-xl"></i>
                        <p className="text-white">${balance} USD</p>
                    </div>
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="primary"
                                name={name}
                                size="sm"
                                src={imageUrl}
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2" textValue="User">
                                <p className="font-semibold">Registrado como</p>
                                <p className="font-semibold">{"email"}</p>
                            </DropdownItem>
                            <DropdownItem key="settings" textValue="Log out" color="warning">Recargar saldo</DropdownItem>
                            <DropdownItem key="team_settings" textValue="Log out" href="/profile">Ver perfil</DropdownItem>
                            <DropdownItem key="analytics" textValue="Log out">Crear publicación</DropdownItem>
                            <DropdownItem key="logout" color="danger" textValue="Log out" onClick={closeSession}>
                                Cerrar sesión
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className={`w-full ${index === menuItems.length - 1 ? 'text-red-600' : 'text-white'}`}
                                href={item.href}
                                onClick={index === menuItems.length - 1 ? closeSession : undefined}
                                size="lg"
                            >
                                {item.text}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </NavbarHeader>
            <div className="bg-gray-50">
                {children}
            </div>
        </>
    )
}
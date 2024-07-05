"use client"
import { NavbarHeader } from "@/components/landing/Header/components";
import { login } from "@/slices/auth/authSlice";
import { RootState } from "@/slices/store/reduxStore";
import { createClient } from "@/utils/supabase/client";
import { Avatar } from "@nextui-org/avatar";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { Link } from "@nextui-org/link";
import { NavbarContent, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function layout({ children }: { children: React.ReactNode[] }) {
    const {email, name} = useSelector((state:RootState)=>state.auth);
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        async function verifySession() {
            const supabase = createClient();
            const { error, data } = await supabase.auth.getUser()
            if (!error) {
                const userEmail = data.user?.email;
                const name = data.user?.user_metadata.name;
                const profession = data.user?.user_metadata.profession;
                const imageUrl = data.user?.user_metadata.imageUrl;
                const id = data.user?.id;
                const userData = Object.assign({
                    email:userEmail,
                    name:name,
                    profession:profession,
                    imageUrl,
                    id:id
                })
                dispatch(login(userData))
            }else{
                router.push('/login');
            }
        }
        verifySession();
    }, [])
    const menuItems = [
        "INICIO",
        "RECARGAR SALDO",
        "CREAR PUBLICACIÓN",
        "VER PERFIL",
        "CERRAR SESIÓN",
    ];
    return (
        <>
            <NavbarHeader>
                <NavbarContent as="div" justify="end">
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name="Jason Hughes"
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2" textValue="User">
                                <p className="font-semibold">Registrado como</p>
                                <p className="font-semibold">{email}</p>
                            </DropdownItem>
                            <DropdownItem key="settings" textValue="Log out" color="warning">Recargar saldo</DropdownItem>
                            <DropdownItem key="team_settings" textValue="Log out">Ver perfil</DropdownItem>
                            <DropdownItem key="analytics" textValue="Log out">Crear publicación</DropdownItem>
                            <DropdownItem key="logout" color="danger" textValue="Log out">
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
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </NavbarHeader>
            {children}
        </>
    )
}
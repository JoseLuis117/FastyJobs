import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SessionDataTypes } from "../interface/types";
export function useSession() {
    const [session, setSession] = useState({} as SessionDataTypes);
    const router = useRouter();
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
                const balance = data.user.user_metadata.balance;
                const tel = data.user.user_metadata.tel;
                const location = data.user.user_metadata.location;
                const description = data.user.user_metadata.description;
                const userData = Object.assign({
                    email: userEmail,
                    name: name,
                    profession: profession,
                    imageUrl,
                    id: id,
                    balance: balance,
                    tel: tel,
                    location: location,
                    description: description
                })
                setSession(userData);
            } else {
                router.push('/login');
            }
        }
        verifySession();
    }, [router])
    async function refreshUserData() {
        const supabase = createClient();
        const { error, data } = await supabase.auth.getUser();
        if (!error) {
            const userEmail = data.user?.email;
            const name = data.user?.user_metadata.name;
            const profession = data.user?.user_metadata.profession;
            const imageUrl = data.user?.user_metadata.imageUrl;
            const id = data.user?.id;
            const balance = data.user.user_metadata.balance;
            const tel = data.user.user_metadata.tel;
            const location = data.user.user_metadata.location;
            const description = data.user.user_metadata.description;
            const userData = {
                email: userEmail!,
                name,
                profession,
                imageUrl,
                id,
                balance,
                tel,
                location,
                description
            };
            setSession(userData);
        }
    }
    return {
        ...session,
        refreshUserData
    }
}
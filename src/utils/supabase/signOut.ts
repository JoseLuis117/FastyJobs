import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const signOut = async({router}:{router:AppRouterInstance})=>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_FRONT_URL}/api/auth/signout`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        }
    })
    if(response.ok){
        router.push('/login');
    }
}
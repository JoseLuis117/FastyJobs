import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
    const { name, email, password } = await req.json();
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
        email, password, options: {
            data: {
                name, balance:0, description:"Sin biografía",location:"Sin ubicación",tel:"Sin número",imageUrl:"",profession:"Sin profesión"
            },
            emailRedirectTo:`${process.env.NEXT_PUBLIC_FRONT_URL}/login`
        }
    })
    if (error) {
        return Response.json({ ok: false, error: error.message })
    }
    return Response.json({ ok: true, message: 'Te enviamos un correo a tu cuenta para validar tu registro' });
}
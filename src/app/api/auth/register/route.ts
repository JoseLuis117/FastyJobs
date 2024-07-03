import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
    const { name, email, password } = await req.json()
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
        email, password, options: {
            data: {
                name
            },
            emailRedirectTo:`${process.env.NEXT_PUBLIC_FRONT_URL}/login?confirmed=true`
        }
    })
    if (error) {
        return Response.json({ ok: false, error: error.message })
    }
    return Response.json({ ok: true, message: 'Te enviamos un correo a tu cuenta para validar tu registro' });
}
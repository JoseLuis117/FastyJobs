import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
    const { email, password } = await req.json()
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({email, password});
    switch (error?.message) {
        case 'Invalid login credentials':
            return Response.json({ ok: false, error: "Credenciales incorrectas" })
        case 'Email not confirmed':
            return Response.json({ ok: false, error: "Tu correo no ha sido verificado" })
        default:
            break;
    }
    if (error) {
        return Response.json({ ok: false, error: error.message })
    }
    return Response.json({ ok: true });
}
import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
    const { email, password } = await req.json()
    const supabase = createClient();
    const { error, data } = await supabase.auth.signInWithPassword({ email, password });
    switch (error?.message) {
        case 'Invalid login credentials':
            return Response.json({ ok: false, error: "Credenciales incorrectas" })
        case 'Email not confirmed':
            return Response.json({ ok: false, error: "Tu correo no ha sido verificado" })
        default:
            break;
    }
    const userEmail = data.user?.email;
    const name = data.user?.user_metadata.name;
    const profession = data.user?.user_metadata.profession;
    const imageUrl = data.user?.user_metadata.imageUrl;
    const id = data.user?.id;
    console.log("User email")
    console.log(userEmail);
    console.log("Name");
    console.log(name)
    console.log("Id")
    console.log(id);

    const userData = Object.assign({
        email:userEmail,
        name:name,
        id:id,
        profession:profession,
        imageUrl:imageUrl
    })
    if (error) {
        return Response.json({ ok: false, error: error.message })
    }
    return Response.json({ ok: true, userData });
}
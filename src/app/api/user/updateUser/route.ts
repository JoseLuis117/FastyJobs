import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) {
    const formData = await req.formData();
    const id = formData.get('id') as string;
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const location = formData.get('location') as string;
    const tel = formData.get('tel') as string;
    const profession = formData.get('profession') as string;
    const image = formData.get('image') as File;
    console.log("Data", name, description, location, tel, profession);

    const supabase = createClient();
    const uuid = uuidv4();
    const { error: errorImage } = await supabase.storage.from('images').upload(`avatar/${uuid}`, image, {
        upsert: true
    });
    const { data: imageOld } = await supabase.auth.getUser();
    let imageUrl: string = "";
    console.log(typeof image);
    console.log(typeof image !== "string");
    if (typeof image !== "string") {
        console.log("Imagen definida");
        const imageOldUrl = imageOld.user?.user_metadata.imageUrl;
        if (imageOldUrl) {
            const { data: response } = await supabase.storage.from('images').remove([`avatar/${imageOldUrl}`]);
            console.log("Remove")
            console.log(response);
        }
        const { data } = supabase.storage.from('images').getPublicUrl(`avatar/${uuid}`);
        console.log("Data de image")
        console.log(data)
        imageUrl = data.publicUrl;
    } else {
        imageUrl = imageOld.user?.user_metadata.imageUrl;
    }

    const { data: user, error } = await supabase.auth.updateUser({
        data: {
            name,
            description,
            location,
            tel,
            imageUrl,
            profession
        }
    })
    await supabase.auth.refreshSession();
    if (error) {
        return NextResponse.json({ ok: false, error: error.message })
    }
    return NextResponse.json({ ok: true, message: "Datos actualizados correctamente" });
}
'use server'

import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun.js"; // mailgun.js v11.1.0

export async function sendMessage(nombre: string, apellido: string, email: string, telefono: string, mensaje: string) {
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
        username: "api",
        key: process.env.MAILGUN_API_KEY as string,
        // When you have an EU-domain, you must specify the endpoint:
        // url: "https://api.eu.mailgun.net"
    });
    try {
        const data = await mg.messages.create("granerosdelsur.com.ar", {
            from: process.env.MAIL_FROM as string,
            to: [process.env.MAIL_TO1 as string, process.env.MAIL_TO2 as string],
            subject: "Mensaje Recibido de formulario web #" + crypto.randomUUID().split("-")[0],
            text: "Nuevo mensaje recibido desde el formulario de contacto del sitio web:\n\n Nombre: " + nombre + " " + apellido + ".\n\n" + "Email: " + email + ".\n\n" + "Teléfono: " + telefono + ".\n\n" + "Su mensaje es: " + mensaje,
        });

        console.log(data); // logs response data
        return data;
    } catch (error) {
        console.log(error); //logs any error
    }
}

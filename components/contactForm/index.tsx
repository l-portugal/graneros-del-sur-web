'use client'

import { useState } from "react"

import contactStyles from "../../styles/contact.module.css"

import { sendMessage } from "@/lib/email";

export default function ContactForm() {

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const nombre = formData.get("name") as string;
        const apellido = formData.get("lastName") as string;
        const email = formData.get("email") as string;
        const telefono = formData.get("phone") as string;
        const mensaje = formData.get("message") as string;

        if (nombre.length === 0 || apellido.length === 0 || email.length === 0 || telefono.length === 0 || mensaje.length === 0) {
            alert("Por favor complete todos los campos");
            setLoading(false);
            return;
        }

        //validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Email inválido");
            setLoading(false);
            return;
        }

        const result = await sendMessage(nombre, apellido, email, telefono, mensaje);

        if(result.status !== 200) {
            alert("Error al enviar el mensaje");
        }

        alert("Mensaje enviado con exito");
        clearInputs();

        setLoading(false);
    }

    const clearInputs = () => {
        const inputs = document.querySelectorAll("input");
        inputs.forEach(input => {
            input.value = "";
        });
        const textarea = document.querySelector("textarea");
        textarea.value = "";
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={contactStyles.contactForm}>
                <div className={contactStyles.formRow}>
                    <input name="name" placeholder="Nombre" className={contactStyles.formInput} />
                    <input name="lastName" placeholder="Apellido" className={contactStyles.formInput} />
                </div>
                <input type="email" name="email" placeholder="Email" className={contactStyles.formInput} />
                <input name="phone" placeholder="Teléfono" className={contactStyles.formInput} />
                <textarea name="message" placeholder="Mensaje" rows={6} className={contactStyles.formTextarea} />

                <button
                    disabled={loading}
                    className={contactStyles.formButton}
                >
                    {loading ? "Enviando..." : "Enviar"}
                </button>

            </form>
        </>
    );
}
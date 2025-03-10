"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("Mensaje enviado con éxito");
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <div>
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Correo" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Mensaje" value={formData.message} onChange={handleChange} required />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

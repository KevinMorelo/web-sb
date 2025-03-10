"use client"; // Necesario para usar useEffect en App Router

import { useEffect, useState } from "react";
import { fetchServices } from "../../services/api";
import ServiceCard from "../../components/ServiceCard";

export default function ServicesPage() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServices().then(setServices);
    }, []);

    return (
        <div>
            <h1>Nuestros Servicios</h1>
            {services.map((service) => (
                <ServiceCard key={service.id} title={service.title} description={service.description} />
            ))}
        </div>
    );
}

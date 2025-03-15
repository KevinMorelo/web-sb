"use client";

import { useParams } from "next/navigation";
import styled from "styled-components";

const ServiceContainer = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #f39c12;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 18px;
  color: #333;
  margin-top: 20px;
`;

const serviceData = {
  "mantenimiento-preventivo": {
    title: "Mantenimiento Preventivo",
    description:
      "Inspección y pruebas periódicas para garantizar el funcionamiento seguro y evitar fallas.",
  },
  "mantenimiento-correctivo": {
    title: "Mantenimiento Correctivo",
    description:
      "Reparación de equipos para corregir fallas, restablecer funcionamiento y garantizar seguridad.",
  },
  "calibracion": {
    title: "Calibración",
    description:
      "Comparación de medidas de equipos usando patrones, simuladores y analizadores como referencia.",
  },
};

export default function ServiceDetail() {
  const params = useParams();
  
  console.log("Ruta capturada:", params);

  if (!params || !params.services) {
    return <ServiceContainer>Servicio no encontrado</ServiceContainer>;
  }

  const service = params.services;

  if (!serviceData[service]) {
    return <ServiceContainer>Servicio no encontrado</ServiceContainer>;
  }

  return (
    <ServiceContainer>
      <Title>{serviceData[service].title}</Title>
      <Description>{serviceData[service].description}</Description>
    </ServiceContainer>
  );
}

"use client"

import styled from "styled-components";

const Container = styled.div`
    max-width: 900px;
    margin: auto;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

export default function AboutPage() {
    return (
        <Container>
        <div>
            <h1>Sobre Nosotros</h1>
            <p>Nuestra empresa se dedica a...</p>
        </div>
        </Container>      
    );
}

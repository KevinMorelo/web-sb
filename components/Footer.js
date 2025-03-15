"use client"

import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 20px 0;
  text-align: center;
  margin-top: auto;  /* 📌 Evita que se superponga */
  width: 100%;
  position: relative;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  font-size: 16px;

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #f39c12;
    }
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  color: #ccc;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          © {new Date().getFullYear()} Sociedad Biomédica. Todos los derechos reservados.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

// Contenedor del Header
const HeaderContainer = styled.header`
    background: #2C3E50;
    color: white;
    padding: 15px 20px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

// Logo siempre visible
const Logo = styled.div`
    display: flex;
    align-items: center;
    max-width: 200px;
    cursor: pointer;
    
    img {
        max-width: 100%;
        height: auto;
        transition: transform 0.3s ease-in-out;

        @media (hover: hover) {
            &:hover {
                transform: scale(1.1);
            }
        }
    }
`;


// Contenedor del menú
const NavContainer = styled.nav`
    @media (max-width: 768px) {
        position: absolute;
        top: 75px;
        left: 0;
        width: 100%;
        background: #2C3E50;
        text-align: center;
        height: ${({ open }) => (open ? "100vh" : "0")}; /* 📌 Se despliega en móviles */
        overflow: hidden;
        transition: height 0.3s ease-in-out;
        box-shadow: ${({ open }) => (open ? "0px 4px 10px rgba(0,0,0,0.3)" : "none")}; /* 📌 Efecto de sombra */

    }
`;

// Lista del menú
const NavList = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
    justify-content: flex-end;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        text-align: center;
        background: #2C3E50;
        opacity: ${({ open }) => (open ? "1" : "0")};
        transition: opacity 0.3s ease-in-out;
    }
`;

const NavItem = styled.li`
    display: inline;
`;
const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    transition: color 0.3s;

    @media (hover: hover) {
        &:hover {
            color: #f39c12;
        }
    }
`;
// Botón hamburguesa - Solo visible en móviles
const MenuButton = styled.button`
    background: #f39c12;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 5px;
    position: absolute;
    right: 20px;
    top: 8px;
    z-index: 1100;

    @media (min-width: 769px) {
        display: none;
    }

    @media (hover: hover) {
        &:hover {
            background: #e67e22;
        }
    }
`;

const ContactButton = styled(Link)`
    background: #f39c12;
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background 0.3s;

    &:hover {
        background: #e67e22;
    }

    @media (max-width: 768px) {
        display: block;
        width: 80%;
        margin: 10px 10px 10px 20px;
        text-align: center;
    }
`;


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuClick = () => {
        setMenuOpen(false);
    };

    return (
        
            <HeaderContainer>
                <Link href="/" passHref>
                <Logo>
                    <Image 
                        src="/sbblanco.png" 
                        alt="Logo de Mi Empresa" 
                        width={170}
                        height={60} 
                        priority
                    />
                </Logo>
                </Link>
                <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "✖" : "☰"}
                </MenuButton>
                <NavContainer open={menuOpen}>
                    <NavList open={menuOpen}>
                        <NavItem><StyledLink href="/" onClick={handleMenuClick}>Inicio</StyledLink></NavItem>
                        <NavItem><StyledLink href="/about" onClick={handleMenuClick}>Nosotros</StyledLink></NavItem>
                        <NavItem><StyledLink href="/services" onClick={handleMenuClick}>Servicios</StyledLink></NavItem>
                        <NavItem><StyledLink href="/blog" onClick={handleMenuClick}>Blog</StyledLink></NavItem>
                        <NavItem><ContactButton href="/contact" onClick={() => setMenuOpen(false)}>Contáctenos</ContactButton></NavItem>
                    </NavList>
                </NavContainer>
            </HeaderContainer>
        
    );
}

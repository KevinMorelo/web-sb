"use client"; // Asegura que se ejecute solo en el cliente

import ImageSlider from "../components/ImageSlider";
import styled, { keyframes } from "styled-components";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// **Estilos Generales**
const Section = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 50px;
  font-weight: 800;
  color: #f39c12;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.1;
  text-align: left;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transition: color 0.3s ease-in-out, text-shadow 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  &:hover {
    color: #e67e22; /* ✅ Cambia a un tono más oscuro */
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2); /* ✅ Aumenta la sombra */
    transform: scale(1.05); /* ✅ Efecto de agrandamiento */
  }

  @media (max-width: 768px) {
    font-size: 38px;
    text-align: center;
    line-height: 1.2;
  }
`;

const Button = styled.button`
  background: #f39c12;
  color: white;
  border: none;
  padding: 12px 18px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  margin-top: 15px;

  &:hover {
    background: #e67e22;
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* ✨ Efecto de elevación */
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 14px;
  }
`;

// **Sección 1: Hero (Bienvenida)**
const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 85vh; /* En lugar de 100vh, reducimos el alto */
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto; /* Para que en móviles se adapte */
    padding-top: 80px; /* Evita que el header lo cubra */
    text-align: center;
    justify-content: center;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px); /* ✅ Sin espacios incorrectos */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TextContainer = styled.div`
  flex: 1; /* 📌 Ocupará la mitad derecha */
  padding: 20px 40px; /* 📌 Reduce el padding superior */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -30px; /* 📌 Hace que suba más cerca del header */
  animation: ${fadeInUp} 0.6s ease-in-out; /* ✅ Aplica la animación correctamente */

  @media (max-width: 768px) {
    padding: 20px;
    width: 100%;
    text-align: center;
    margin-top: -20px; /* Ajuste en móviles */
  }
`;

const ImageContainer = styled.div`
  flex: 1; /* 📌 Ocupará la mitad izquierda */
  width: 50%; /* 📌 Se asegura de ocupar solo la mitad */
  height: 100vh; /* ✅ Asegura que tenga altura */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative; /* ✅ Asegura que Image funcione bien */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh; /* 📌 Para evitar que cubra demasiado en móviles */
  }
`;

// **Sección 2: Servicios**

const ServicesSection = styled(Section)`
  background: #f8f8f8;
  text-align: center;
  padding: 60px 20px;
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const ServiceCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 320px; /* 🔥 Mantiene un tamaño uniforme */
  min-height: 250px; /* 🔥 Ajuste para que todas las tarjetas tengan la misma altura */
  max-height: 420px; /* 🔥 Ajuste para que todas las tarjetas tengan la misma altura */
  text-align: center;
  transition: all 0.3s ease-in-out;
  animation: ${fadeIn} 0.8s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* 📌 Asegura que el botón se mantenga alineado */
  scroll-snap-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceButton = styled.button`
  background: #f39c12;
  color: white;
  border: none;
  padding: 12px 18px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  margin-top: auto; /* 🔥 Esto empuja el botón hacia abajo */

  &:hover {
    background: #e67e22;
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceImage = styled.img`
  width: 80px; /* Ajusta según sea necesario */
  height: 80px; /* Asegura que tenga una altura definida */
  margin-bottom: 15px;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  /* Centrar la imagen dentro del card */
  display: block;
  margin-left: auto;
  margin-right: auto;

  ${ServiceCard}:hover & {
    transform: scale(1.1);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 10px;
  flex-grow: 1; /* 🔥 Hace que el título tenga el mismo espacio en todas las tarjetas */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;


const ServiceDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.4;
  min-height: 100px; /* 🔥 Hace que todas las descripciones tengan la misma altura */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-grow: 1; /* 🔥 Distribuye el espacio */
`;

// Slider personalizado
const ServiceSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
    padding: 15px;
  }

  .slick-prev,
  .slick-next {
    font-size: 24px;
    color: #f39c12;
    z-index: 1;
  }

  .slick-prev {
    left: -40px;
  }

  .slick-next {
    right: -40px;
  }

  .slick-dots li.slick-active button:before {
    color: #f39c12;
  }
`;

const arrowStyle = {
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f39c12",
    borderRadius: "50%",
    width: "40px",  // Tamaño del círculo
    height: "40px",
    padding: "10px",
    zIndex: "10",  // Asegura que estén sobre la imagen
    cursor: "pointer",
    fontSize: "20px",  // Tamaño del icono de la flecha
    color: "#fff",  // Color de la flecha
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    boxshadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease-in-out",

};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            style={{ ...arrowStyle, right: "-35px" }} // Alineación derecha
        >
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            style={{ ...arrowStyle, left: "-35px" }} // Alineación izquierda
        >
        </div>
    );
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: <PrevArrow />, // 🔥 Reemplaza el botón "Previous"
  nextArrow: <NextArrow />, // 🔥 Reemplaza el botón "Next"
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

// 📌 Sección de Instagram

const InstagramSection = styled(Section)`
  background: #fafafa;
  text-align: center;
  padding: 60px 20px;
`;

const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  max-width: 1000px;
  margin: auto;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const InstagramImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const InstagramButton = styled.a`
  display: inline-block;
  background: #e4405f;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 18px;
  border-radius: 8px;
  margin-top: 20px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #d62e50;
    transform: scale(1.05);
  }
`;

// **Sección 3: Contacto**
const ContactSection = styled(Section)`
  background: linear-gradient(135deg, #2c3e50, #34495e); /* Gradiente atractivo */
  color: white;
  text-align: center;
  padding: 80px 50px;
  border-radius: 15px;
  margin-top: 40px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
`;

const ContactContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 12px;
  display: inline-block;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);
  width: 70%;
  margin: auto;
`;

const ContactTitle = styled.h2`
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 15px;
  color: #f39c12;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

const ContactInfo = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  svg {
    font-size: 22px;
    color: #f39c12;
  }
`;

const ContactButton = styled(Button)`
  font-size: 18px;
  padding: 15px 25px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #e67e22;
    transform: scale(1.1);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 80%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    box-shadow: 0px 4px 15px rgba(243, 156, 18, 0.6);
  }
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 120px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  resize: none;

  &:focus {
    outline: none;
    box-shadow: 0px 4px 15px rgba(243, 156, 18, 0.6);
  }
`;

export default function HomePage() {
  return (
    <>
      <HeroSection>
        <ImageContainer>
          <ImageSlider />
        </ImageContainer>
        <TextContainer>
          <Title>Bienvenido a Sociedad Biomédica</Title>
          <p>
            ¡Bienvenido a Sociedad Biomédica! Somos una empresa colombiana
            especializada en la gestión de tecnología biomédica, con la misión
            de ayudarte a salvar vidas en todo el mundo.
          </p>
          <p>
            Además, si buscas aprender y crecer en el campo de la ingeniería
            biomédica, te ofrecemos capacitación y formación de alto nivel para
            toda Latinoamérica. ¡Estamos aquí para apoyarte en lo que necesites!
            🚀
          </p>
          <Button>Mas de Nosotros</Button>
        </TextContainer>
      </HeroSection>
      <ServicesSection>
        <Title>Nuestros Servicios</Title>
        <ServiceSlider {...sliderSettings}>
          <ServiceCard>
            <ServiceImage src="/biomedica.jpg" alt="Servicio 1" />
            <ServiceTitle>Mantenimiento Preventivo</ServiceTitle>
            <ServiceDescription>
            Inspección y pruebas periódicas para garantizar funcionamiento seguro y evitar fallas
            </ServiceDescription>
            <ServiceButton>Clic para más información</ServiceButton>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src="/biomedica.jpg" alt="Servicio 2" />
            <ServiceTitle>Mantenimiento Correctivo</ServiceTitle>
            <ServiceDescription>
            Reparación de equipos para corregir fallas, restablecer funcionamiento y garantizar seguridad
            </ServiceDescription>
            <ServiceButton>Clic para más información</ServiceButton>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src="/biomedica.jpg" alt="Servicio 3" />
            <ServiceTitle>Calibración</ServiceTitle>
            <ServiceDescription>
            Comparación de medidas de equipos usando patrones, simuladores y analizadores como referencia
            </ServiceDescription>
            <ServiceButton>Clic para más información</ServiceButton>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src="/biomedica.jpg" alt="Servicio 4" />
            <ServiceTitle>Asesoría BPM Aire Medicinal</ServiceTitle>
            <ServiceDescription>
            Asesoría en BPM de aire medicinal según Resolución 4410
            </ServiceDescription>
            <ServiceButton>Clic para más información</ServiceButton>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src="/biomedica.jpg" alt="Servicio 5" />
            <ServiceTitle>Marcado Láser Instrumental</ServiceTitle>
            <ServiceDescription>
            Marcado láser de instrumental quirúrgico para garantizar trazabilidad y mejorar gestión hospitalaria
            </ServiceDescription>
            <ServiceButton>Clic para más información</ServiceButton>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src="/biomedica.jpg" alt="Servicio 6" />
            <ServiceTitle>Validación de Cadena de Frío</ServiceTitle>
            <ServiceDescription>
            Garantizamos la cadena de frío para evitar daños en medicamentos, sangre y proteger al paciente
            </ServiceDescription>
            <ServiceButton>Clic para más información</ServiceButton>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src="/biomedica.jpg" alt="Servicio 7" />
            <ServiceTitle>Capacitación y Entrenamiento</ServiceTitle>
            <ServiceDescription>
            Capacitación para personal biomédico en mantenimiento, calibración e ingeniería biomédica
            </ServiceDescription>
            <ServiceButton>Clic para más información</ServiceButton>
          </ServiceCard>
        </ServiceSlider>
      </ServicesSection>

      {/* <InstagramSection>
<Title>Síguenos en Instagram</Title>
    <InstagramGrid>
        <InstagramImage src="/insta1.jpg" alt="Post 1" />
        <InstagramImage src="/insta2.jpg" alt="Post 2" />
        <InstagramImage src="/insta3.jpg" alt="Post 3" />
        <InstagramImage src="/insta4.jpg" alt="Post 4" />
    </InstagramGrid>
    <InstagramButton href="https://instagram.com/sociedadbiomedica" target="_blank">
        Ver más en Instagram
    </InstagramButton>
</InstagramSection> */}
<ContactSection>
  <ContactContainer>
    <ContactTitle>Contáctanos</ContactTitle>
    
    <ContactInfo>
      📍 Dirección: Calle 123 # 45-67, Ciudad
    </ContactInfo>
    <ContactInfo>
      📞 Teléfono: +57 123 456 7890
    </ContactInfo>
    <ContactInfo>
      ✉️ Email: contacto@sociedadbiomedica.com
    </ContactInfo>

    {/* Opcional: Formulario de Contacto */}
    <ContactForm>
      <Input type="text" placeholder="Tu nombre" required />
      <Input type="email" placeholder="Tu correo electrónico" required />
      <TextArea placeholder="Escribe tu mensaje..." required></TextArea>
      <ContactButton type="submit">Enviar Mensaje</ContactButton>
    </ContactForm>
  </ContactContainer>
</ContactSection>
</>
);
}

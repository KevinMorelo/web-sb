"use client"; // Asegura que se ejecute solo en el cliente

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import ImageSlider from "../components/ImageSlider";
import styled, { keyframes } from "styled-components";
import { useRouter } from "next/navigation";
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
  margin-top: 40px;

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
  height: 85vh; /* Mantiene una buena altura */
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding-top: 60px;
    text-align: center;
    justify-content: center;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fadeInUp} 0.6s ease-in-out;

  @media (max-width: 768px) {
    padding: 20px;
    width: 100%;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const HeroButton = styled(Button)`
  background: #e74c3c;
  padding: 15px 20px;
  font-size: 18px;
  margin-top: 20px;

  &:hover {
    background: #c0392b;
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
  margin-top: auto;

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
  width: "40px", // Tamaño del círculo
  height: "40px",
  padding: "10px",
  zIndex: "10", // Asegura que estén sobre la imagen
  cursor: "pointer",
  fontSize: "20px", // Tamaño del icono de la flecha
  color: "#fff", // Color de la flecha
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
    ></div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...arrowStyle, left: "-35px" }} // Alineación izquierda
    ></div>
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

// **Sección 3: Contacto**
export default function HomePage() {
  const router = useRouter();

  const handleMoreInfo = (service) => {
    router.push(`/services/${service}`);
  };

  const ContactSection = styled.section`
    background: #f4f4f4;
    text-align: center;
    padding: 80px 50px;
    border-radius: 15px;
    margin-top: 40px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  `;

  const ContactContainer = styled.div`
    background: white;
    padding: 50px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 700px;
    margin: auto;
  `;

  const ContactTitle = styled.h2`
    font-size: 42px;
    font-weight: 800;
    margin-bottom: 20px;
    color: #f39c12;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  `;

  const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px;
    font-size: 18px;
  `;

  const ContactItem = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    color: #2c3e50;

    svg {
      font-size: 22px;
      color: #f39c12;
    }
  `;

  const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 25px;

    a {
      font-size: 28px;
      color: #2c3e50;
      transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

      &:hover {
        color: #f39c12;
        transform: scale(1.2);
      }
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
    width: 100%;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    color: #333;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease-in-out;

    &:focus {
      outline: none;
      border-color: #f39c12;
      box-shadow: 0px 4px 15px rgba(243, 156, 18, 0.3);
    }
  `;

  const TextArea = styled.textarea`
    width: 100%;
    height: 120px;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    color: #333;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
    resize: none;
    transition: all 0.3s ease-in-out;

    &:focus {
      outline: none;
      border-color: #f39c12;
      box-shadow: 0px 4px 15px rgba(243, 156, 18, 0.3);
    }
  `;

  const ContactButton = styled.button`
    background: #f39c12;
    color: white;
    border: none;
    padding: 15px 25px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;

    &:hover {
      background: #e67e22;
      transform: scale(1.05);
      box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    }
  `;

  const MapContainer = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 12px;
    margin-top: 30px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    iframe {
      width: 100%;
      height: 100%;
      border: 0;
    }
  `;

  // **Sección de Testimonios Mejorada**
  const TestimonialsSection = styled.section`
    background: #ffffff;
    text-align: center;
    padding: 60px 20px;
    margin-top: 40px;
  `;

  const TestimonialCard = styled.div`
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    max-width: 450px;
    min-height: 280px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }
  `;

  const TestimonialImage = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    margin: 10px auto; /* Ajustado para centrar correctamente */
    display: block;
  `;

  const Stars = styled.div`
    color: #f39c12;
    font-size: 18px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    gap: 2px;
  `;

  const TestimonialText = styled.p`
    font-size: 16px;
    color: #555;
    line-height: 1.4;
    font-style: italic;
    margin-bottom: 15px;
  `;

  const TestimonialAuthor = styled.strong`
    font-size: 18px;
    color: #333;
    display: block;
    margin-top: 5px;
  `;

  const TestimonialCompany = styled.small`
    font-size: 14px;
    color: #888;
    display: block;
  `;

  const TestimonialSlider = styled(Slider)`
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

  const testimonialData = [
    {
      name: "Dr. Juan Pérez",
      company: "Clínica ABC",
      feedback: "La calibración mejoró la seguridad en nuestro hospital.",
      image: "/client1.jpg",
      rating: 5,
    },
    {
      name: "Ing. Carolina Gómez",
      company: "Hospital XYZ",
      feedback:
        "El servicio de mantenimiento preventivo prolongó la vida útil de nuestros equipos.",
      image: "/client2.jpg",
      rating: 4,
    },
    {
      name: "Dr. Luis Ramírez",
      company: "Centro Médico 123",
      feedback:
        "Gracias a la asesoría, cumplimos con las normativas sin problemas.",
      image: "/client3.jpg",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? <FaStar key={i} /> : <FaStarHalfAlt key={i} />);
    }
    return <Stars>{stars}</Stars>;
  };

  return (
    <>
      <HeroSection>
        <TextContainer>
          <Title>Bienvenido a Sociedad Biomédica</Title>
          <p>
            Somos una empresa colombiana especializada en la gestión de
            tecnología biomédica. Nuestra misión es garantizar la seguridad del
            paciente a través de la innovación y el conocimiento.
          </p>
          <p>
            Si necesitas asesoría en mantenimiento, calibración o gestión
            biomédica, ¡contáctanos hoy mismo! 🚀
          </p>
          <HeroButton onClick={() => router.push("/contact")}>
            Solicita una asesoría gratuita
          </HeroButton>
        </TextContainer>
        <ImageContainer>
        <ImageSlider />
        </ImageContainer>
      </HeroSection>
      <ServicesSection>
        <Title>Nuestros Servicios</Title>
        <ServiceSlider {...sliderSettings}>
          <ServiceCard>
            <ServiceImage src="/biomedica.jpg" alt="Servicio 1" />
            <ServiceTitle>Mantenimiento Preventivo</ServiceTitle>
            <ServiceDescription>
              Inspección y pruebas periódicas para garantizar funcionamiento
              seguro y evitar fallas.
            </ServiceDescription>
            <ServiceButton
              onClick={() => handleMoreInfo("mantenimiento-preventivo")}
            >
              Clic para más información
            </ServiceButton>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src="/biomedica.jpg" alt="Servicio 2" />
            <ServiceTitle>Mantenimiento Correctivo</ServiceTitle>
            <ServiceDescription>
              Reparación de equipos para corregir fallas, restablecer
              funcionamiento y garantizar seguridad.
            </ServiceDescription>
            <ServiceButton
              onClick={() => handleMoreInfo("mantenimiento-correctivo")}
            >
              Clic para más información
            </ServiceButton>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src="/biomedica.jpg" alt="Servicio 3" />
            <ServiceTitle>Calibración</ServiceTitle>
            <ServiceDescription>
              Comparación de medidas de equipos usando patrones, simuladores y
              analizadores como referencia.
            </ServiceDescription>
            <ServiceButton onClick={() => handleMoreInfo("calibracion")}>
              Clic para más información
            </ServiceButton>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src="/biomedica.jpg" alt="Servicio 4" />
            <ServiceTitle>Asesoría BPM Aire Medicinal</ServiceTitle>
            <ServiceDescription>
              Asesoría en BPM de aire medicinal según Resolución 4410
            </ServiceDescription>
            <ServiceButton onClick={() => handleMoreInfo("calibracion")}>
              Clic para más información
            </ServiceButton>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src="/biomedica.jpg" alt="Servicio 5" />
            <ServiceTitle>Marcado Láser Instrumental</ServiceTitle>
            <ServiceDescription>
              Marcado láser de instrumental quirúrgico para garantizar
              trazabilidad y mejorar gestión hospitalaria
            </ServiceDescription>
            <ServiceButton Click={() => handleMoreInfo("calibracion")}>
              Clic para más información
            </ServiceButton>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src="/biomedica.jpg" alt="Servicio 6" />
            <ServiceTitle>Validación de Cadena de Frío</ServiceTitle>
            <ServiceDescription>
              Garantizamos la cadena de frío para evitar daños en medicamentos,
              sangre y proteger al paciente
            </ServiceDescription>
            <ServiceButton onClick={() => handleMoreInfo("calibracion")}>
              Clic para más información
            </ServiceButton>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src="/biomedica.jpg" alt="Servicio 7" />
            <ServiceTitle>Capacitación y Entrenamiento</ServiceTitle>
            <ServiceDescription>
              Capacitación para personal biomédico en mantenimiento, calibración
              e ingeniería biomédica
            </ServiceDescription>
            <ServiceButton onClick={() => handleMoreInfo("calibracion")}>
              Clic para más información
            </ServiceButton>
          </ServiceCard>
        </ServiceSlider>
      </ServicesSection>
      <TestimonialsSection>
        <Title>Casos de Éxito</Title>
        <p>
          Nuestros clientes nos califican con un promedio de 4.9/5 ⭐⭐⭐⭐⭐
        </p>
        <TestimonialSlider {...sliderSettings}>
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <TestimonialImage
                src={testimonial.image}
                alt={testimonial.name}
              />
              {renderStars(testimonial.rating)}
              <TestimonialText>{testimonial.feedback}</TestimonialText>
              <TestimonialAuthor>{testimonial.name}</TestimonialAuthor>
              <TestimonialCompany>{testimonial.company}</TestimonialCompany>
            </TestimonialCard>
          ))}
        </TestimonialSlider>
        <Button onClick={() => router.push("/testimonios")}>
          Ver más testimonios
        </Button>
      </TestimonialsSection>
      <ContactSection>
        <ContactContainer>
          <ContactTitle>Contáctanos</ContactTitle>

          <ContactInfo>
            <ContactItem>
              <FaMapMarkerAlt /> Calle 123 # 45-67, Ciudad
            </ContactItem>
            <ContactItem>
              <FaPhone /> +57 123 456 7890
            </ContactItem>
            <ContactItem>
              <FaEnvelope /> contacto@sociedadbiomedica.com
            </ContactItem>
          </ContactInfo>

          <SocialLinks>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </SocialLinks>

          <ContactForm>
            <Input type="text" placeholder="Tu nombre" required />
            <Input type="email" placeholder="Tu correo electrónico" required />
            <TextArea placeholder="Escribe tu mensaje..." required />
            <ContactButton type="submit">Enviar Mensaje</ContactButton>
          </ContactForm>

          <MapContainer>
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDFCUeUrFICCF8VM37gLoB3a7RxAoDYv8w&q=8.757282474117977,-75.87531756942022`}
              allowFullScreen
            ></iframe>
          </MapContainer>
        </ContactContainer>
      </ContactSection>
    </>
  );
}

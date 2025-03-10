import Slider from "react-slick";
import styled from "styled-components";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageContainer = styled.div`
    flex: 1;
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px; /* 🟡 Bordes redondeados */
    }

    @media (max-width: 768px) {
    display: none;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2); /* 🔥 Añadir opacidad sutil */
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Fondo oscuro */
`;


const SliderImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const SliderContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    .slick-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh; /* 🔥 Asegurar que cada slide ocupa pantalla completa */
    }

    .slick-list {
        height: 100vh; /* 🔥 Ajustar alto total del slider */
    }
`;

const arrowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f39c12",
    borderRadius: "50%",
    width: "40px",  // Tamaño del círculo
    height: "40px",
    padding: "10px",
    zIndex: 2,  // Asegura que estén sobre la imagen
    cursor: "pointer",
    fontSize: "20px",  // Tamaño del icono de la flecha
    color: "#fff",  // Color de la flecha
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
            style={{ ...arrowStyle, right: "5px" }} // Alineación derecha
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
            style={{ ...arrowStyle, left: "5px" }} // Alineación izquierda
        >
        </div>
    );
};

const settings = {
    dots: true,           // Mantiene los puntos indicadores
    infinite: true,       // Desliza de forma infinita
    speed: 1000,          // Velocidad de transición
    slidesToShow: 1,      
    slidesToScroll: 1,    
    autoplay: true,       // Activar auto-slide
    autoplaySpeed: 3000,  
    fade: true,           // Efecto de desvanecimiento
    arrows: true,         // ✨ Activa las flechas
    nextArrow: <NextArrow />,  
    prevArrow: <PrevArrow />, 
};

const ImageSlider = () => {
    return (
        <ImageContainer>   
            <SliderContainer>
                <Slider {...settings}>
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <Overlay>
                    <SliderImage 
    src="/biomedica.jpg" 
    alt="Imagen 1" 
    width={1200} 
    height={800} 
    style={{ objectFit: "cover", width: "100%", height: "100%" }}
    priority 
/>
</Overlay>

                    </div>
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <Overlay>
                    <SliderImage 
    src="/biomedica.jpg" 
    alt="Imagen 2" 
    width={1200} 
    height={800} 
    style={{ objectFit: "cover", width: "100%", height: "100%" }}
    priority 
/>
</Overlay>
                    </div>
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <Overlay>
                    <SliderImage 
    src="/biomedica.jpg" 
    alt="Imagen 3" 
    width={1200} 
    height={800} 
    style={{ objectFit: "cover", width: "100%", height: "100%" }}
    priority 
/>
</Overlay>
                    </div>
                </Slider>
            </SliderContainer>
        </ImageContainer>
    );
};
 
export default ImageSlider;

import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


export const metadata = {
    title: "Mi Empresa",
    description: "Bienvenido a nuestra página web.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <Header />
                <main className="container">{children}</main>
                <Footer />
            </body>
        </html>
    );
}

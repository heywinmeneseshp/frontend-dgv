// pages/_app.js

import MainLayout from '@/layout/MainLayout';
import '../styles/global.css'; // importa estilos globales (ajusta la ruta según tu proyecto)
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    );
}

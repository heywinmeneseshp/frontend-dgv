import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';


export default function Layout({ children }) {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <Header />

            {/* Contenido (Feed) */}
            <main style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
                <div className="container py-5">
                    {children /* Aquí va el contenido dinámico o "feed" */}
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

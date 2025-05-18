import { useState } from 'react';

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Iniciando sesión con ${email}`);
        // Aquí tu lógica real de autenticación
    };

    return (
        <>
           <div className="bg-success text-white" style={{ height: '10vh' }}>

            </div>
            < div
                style={
                    {
                        height: '77vh',

                        alignContent: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundImage: "url('/images/background.png')",
                        backgroundSize: 'cover',       // Para que la imagen cubra todo el div
                        backgroundPosition: 'center',  // Centrar la imagen
                        backgroundRepeat: 'no-repeat', // Evitar que se repita
                    }
                } >

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="text-center">Iniciar Sesión</h2>

                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Correo electrónico</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="form-control"
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Contraseña</label>
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control"
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-success w-100">Entrar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

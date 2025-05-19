import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ height: '14vh' }} className="bg-success text-white d-flex justify-content-center align-items-center">
      <Container className="text-center" style={{ fontSize: '1rem', fontWeight: '400' }}>
        © {currentYear}   <Link
          className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          href={'https://www.craken.com.co/'}> Craken Agencia Digital.</Link>  Todos los derechos reservados.
        <br />
        Esta página fue creada para <strong>DGV</strong> Prestacion De Servicios S.A.S.
      </Container>
    </footer>
  );
}

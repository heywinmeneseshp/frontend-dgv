import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{height: '13vh'}} className="bg-success text-white d-flex justify-content-center align-items-center">
      <Container className="text-center" style={{ fontSize: '1rem', fontWeight: '400' }}>
        © {currentYear} Craken. Todos los derechos reservados.  
        <br />
        Esta página fue creada para <strong>DGV</strong>.
      </Container>
    </footer>
  );
}

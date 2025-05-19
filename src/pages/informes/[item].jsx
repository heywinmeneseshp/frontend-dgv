
import { useEffect, useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';

import Layout from '@/layout/Layout';

export default function MaestrosPage() {
  const [maestros, setMaestros] = useState([]);

  useEffect(() => {
    // Aquí puedes hacer fetch a una API real
    const datosMaestros = [
      { id: 1, nombre: 'Juan Pérez', materia: 'Matemáticas' },
      { id: 2, nombre: 'Ana Gómez', materia: 'Ciencias' },
      { id: 3, nombre: 'Luis Torres', materia: 'Historia' },
    ];
    setMaestros(datosMaestros);
  }, []);

  return (
    <Layout>
      <Container className="py-4">
        <h2 className="text-center mb-4">Lista de Maestros</h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Materia</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {maestros.map(maestro => (
              <tr key={maestro.id}>
                <td>{maestro.id}</td>
                <td>{maestro.nombre}</td>
                <td>{maestro.materia}</td>
                <td>
                  <Button variant="info" size="sm" className="me-2">Editar</Button>
                  <Button variant="danger" size="sm">Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Layout>
  );
}

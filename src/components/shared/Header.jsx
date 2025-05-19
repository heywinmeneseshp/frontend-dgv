import Image from 'next/image';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function Inicio() {
  const router = useRouter();

  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="/icons/logo-192.png"
            alt="Logo"
            width={30}
            height={30}
            className="d-inline-block align-top"
          />
          <span className="ms-2 fw-bold">DGV</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <NavDropdown title="Maestros" id="maestros-dropdown">
              <NavDropdown.Item onClick={() => router.push('/maestros/usuarios')}>Usuarios</NavDropdown.Item>
              <NavDropdown.Item onClick={() => router.push('/maestros/motivos')}>Motivos</NavDropdown.Item>
              <NavDropdown.Item onClick={() => router.push('/maestros/tipos')}>Tipos</NavDropdown.Item>
              <NavDropdown.Item onClick={() => router.push('/maestros/frutas')}>Frutas</NavDropdown.Item>
              <NavDropdown.Item onClick={() => router.push('/maestros/comercializadoras')}>Comercializadoras</NavDropdown.Item>
              <NavDropdown.Item onClick={() => router.push('/maestros/productores')}>Productores</NavDropdown.Item>
              <NavDropdown.Item onClick={() => router.push('/maestros/fincas')}>Fincas</NavDropdown.Item>
              <NavDropdown.Item onClick={() => router.push('/maestros/grupo-labores')}>Grupos de Labores</NavDropdown.Item>
              <NavDropdown.Item onClick={() => router.push('/maestros/labores')}>Labores</NavDropdown.Item>
              <NavDropdown.Item onClick={() => router.push('/maestros/items-labores')}>Items Labores</NavDropdown.Item>
              <NavDropdown.Item onClick={() => router.push('/maestros/semanas')}>Semanas</NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Formularios" id="formularios-dropdown">
              <NavDropdown.Item onClick={() => router.push('/formularios/mermaRapida')}>Merma Rapida</NavDropdown.Item>
              <NavDropdown.Item onClick={() => router.push('/formularios/calibracionLargo')}>Calibracion Largo</NavDropdown.Item>
              <NavDropdown.Item onClick={() => router.push('/formularios/PTF')}>PTF</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Informes" id="informes-dropdown">
              <NavDropdown.Item onClick={() => router.push('/informes/estudiantes')}>Informe Estudiantes</NavDropdown.Item>
              <NavDropdown.Item onClick={() => router.push('/informes/cursos')}>Informe Cursos</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

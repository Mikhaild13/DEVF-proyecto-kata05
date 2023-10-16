import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../menu/Netflix 2.jpg'
import '../menu/Menu.css'

export default function Menu() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <img src={logo} height={50}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='text-light'>Inicio</Nav.Link>
            <Nav.Link href="/series" className='text-light'>Series</Nav.Link>
            <Nav.Link href="/peliculas" className='text-light'>Películas</Nav.Link>
            <Nav.Link href="/novedades-populares" className='text-light'>Novedades populares</Nav.Link>
            <Nav.Link href="/mi-lista" className='text-light'>Mi lista</Nav.Link>
            <Nav.Link href="/explora-por-idiomas" className='text-light'>Explora por idiomas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

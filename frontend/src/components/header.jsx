
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { LinkContainer } from 'react-router-bootstrap'

const header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
            <logo/>
            <LinkContainer to='/'>
              <Navbar.Brand >
                <img src={logo} alt="ProShop Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                ProShop
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href='/cart'><FaShoppingCart /> Cart</Nav.Link>
                    <Nav.Link href='/login'><FaUser /> Sign In</Nav.Link>
                </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default header

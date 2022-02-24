import { React } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
const navbar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">TeamX API</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/products">Products</Nav.Link>
                    <Nav.Link as={Link} to="/users">Users</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://github.com/DembaDiack/teamxapi" target="_blank" >Github</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default navbar;
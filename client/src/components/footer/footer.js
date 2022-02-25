import {React} from "react";
import {Container,Row,Col} from "react-bootstrap";
const Footer = (props) => {

    return(
        <footer className="bg-dark mt-5 p-2" style={{color : "whitesmoke"}}>
            <Container>
                <Row>
                    <Col sm={12}>
                        Demba Diack &copy; {new Date().getFullYear()}
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;
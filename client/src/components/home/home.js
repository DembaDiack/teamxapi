import { React } from "react";
import { Container, Row, Col, Image, Accordion, ListGroup, Badge,ButtonGroup,Button } from "react-bootstrap";
import ReactLogo from "../../img/react.png"
import NestLogo from "../../img/nest.png";
import PlusLogo from "../../img/plus.png";
import {Link} from "react-router-dom";
const home = () => {
    return (
        <div>
            <Container className="mt-5  p-5 br-5">
                <h1>Welcome to teamX API</h1>
                <h3>Built with</h3>
                <Container className="mt-2">
                    <Row className="align-items-center">
                        <Col sm={5}>
                            <Image src={ReactLogo} height={250} width={250} />
                        </Col>
                        <Col sm={2}>
                            <Image src={PlusLogo} height={50} width={50} />
                        </Col>
                        <Col sm={5}>
                            <Image src={NestLogo} height={250} width={250} />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How it works</Accordion.Header>
                        <Accordion.Body>
                            the app uses a powerfull Nest back-end, with images store in firebase firestore
                            <br />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Manage Products</Accordion.Header>
                        <Accordion.Body>
                            <h1>
                                Users
                            </h1>
                            <ListGroup as="ol" numbered>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Get all products</div>
                                        /products
                                    </div>
                                    <Badge variant="primary" pill>
                                        GET
                                    </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Get product by id</div>
                                        /products/id
                                    </div>
                                    <Badge variant="primary" pill>
                                        GET
                                    </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Delete product</div>
                                        /products
                                    </div>
                                    <Badge variant="primary" pill>
                                        DELETE
                                    </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Edit product</div>
                                        /products
                                    </div>
                                    <Badge variant="primary" pill>
                                        PATCH
                                    </Badge>
                                </ListGroup.Item>
                            </ListGroup>
                            <ButtonGroup aria-label="Basic example" className="mt-3"> 
                                <Button variant="secondary" as={Link} to="/products/create">Create</Button>
                                <Button variant="secondary" as={Link} to="/products/">List</Button>
                                <Button variant="secondary" as={Link} to="/products/edit">Edit</Button>
                            </ButtonGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Manage Users</Accordion.Header>
                        <Accordion.Body>
                            <h1>
                                Users
                            </h1>
                            <ListGroup as="ol" numbered>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Get all users</div>
                                        /users
                                    </div>
                                    <Badge variant="primary" pill>
                                        GET
                                    </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Get user by id</div>
                                        /users/id
                                    </div>
                                    <Badge variant="primary" pill>
                                        GET
                                    </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Delete User</div>
                                        /users
                                    </div>
                                    <Badge variant="primary" pill>
                                        DELETE
                                    </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Edit User</div>
                                        /users
                                    </div>
                                    <Badge variant="primary" pill>
                                        PATCH
                                    </Badge>
                                </ListGroup.Item>
                            </ListGroup>
                            <ButtonGroup aria-label="Basic example" className="mt-3"> 
                                <Button variant="secondary" as={Link} to="/users/create">Create</Button>
                                <Button variant="secondary" as={Link} to="/users/">List</Button>
                                <Button variant="secondary" as={Link} to="/users/edit">Edit</Button>
                            </ButtonGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    )
}

export default home;
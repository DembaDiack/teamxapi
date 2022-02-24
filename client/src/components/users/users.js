import { React } from "react";
import { Routes, Route, useMatch, Router, Link } from "react-router-dom";
import { Tabs, Tab, Container, Nav } from "react-bootstrap";
import CreateUser from "./components/createUser";
import ListUsers from "./components/listUsers";

const Users = () => {

    return (
        <Container className="mt-5">
            <Nav variant="tabs" defaultActiveKey="/home" className="mb-5">
                <Nav.Item>
                    <Nav.Link href="/users" as={Link} to={"/users"}>List</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/users/create" as={Link} to={"/users/create"}>Create</Nav.Link>
                </Nav.Item>
            </Nav>
            <Routes>
            <Route path={`/`} element={<ListUsers />} />
            <Route path={`/create`} element={<CreateUser />} />
            </Routes>
        </Container>
    )
}

export default Users;
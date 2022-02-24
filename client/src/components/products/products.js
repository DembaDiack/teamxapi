import { React } from "react";
import { Routes, Route, useMatch, Router, Link } from "react-router-dom";
import { Tabs, Tab, Container, Nav } from "react-bootstrap";
import CreateProduct from "./components/createProduct";
import ListProducts from "./components/listProducts";
import EditProduct from "./components/editProduct";

const Products = () => {

    return (
        <Container className="mt-5">
            <Nav variant="tabs" defaultActiveKey="/home" className="mb-5">
                <Nav.Item>
                    <Nav.Link href="/products" as={Link} to={"/products"}>List</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/products/create" as={Link} to={"/products/create"}>Create</Nav.Link>
                </Nav.Item>
            </Nav>
            <Routes>
                <Route path={``} element={<ListProducts/>} />
                <Route path={`create`} element={<CreateProduct />} />
                <Route path={`edit/:id`} element={<EditProduct />} />
            </Routes>
        </Container>
    )
}

export default Products;
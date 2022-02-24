import { React, useEffect, useState } from "react";
import Product from "./product";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { listProducts,deleteProduct } from "../services/products.service";

const ListProducts = () => {
    const initialState = {
        productsList: [],
        loading: true
    }

    const [state, setState] = useState(initialState);
    useEffect(() => {
        loadProds();
    }, []);
    
    const loadProds = ()=> {
        // setState({
        //     ...state,
        //     loading :true
        // })
        listProducts()
            .then(result => {
                console.log(result);
                let temp = [];
                temp = result.data.map((prod) => {
                    return <Col className={"mt-2"}>
                        <Product 
                        key={prod._id} 
                        name={prod.name} 
                        price={prod.price} 
                        quantity={prod.quantity}
                        imageURL={prod.image}
                        loadProds={loadProds}
                        _id={prod._id}
                         />
                    </Col>
                });
                setState({
                    ...state,
                    productsList: temp,
                    loading: false
                });
            })
            .catch(err => {
                setState({
                    ...state,
                    loading: false
                })
                console.log(err);

            })
    }
    return (
        <Container fluid="md">
            <div>
                <h1>
                    Product List
                </h1>
            </div>
            <Row className="justify-items-center">
                {
                    state.loading ?
                        <Container>
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </Container>
                        :
                        state.productsList
                }
            </Row>
        </Container>
    )
}
export default ListProducts;
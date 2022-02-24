import { React, useEffect } from "react";
import { Row, Col, Card ,Button} from "react-bootstrap";
import {deleteProduct} from "../services/products.service";
import {Link} from "react-router-dom";

const Product = (props) => {
    const handleDelete = (id)=>{
        deleteProduct(id)
        .then(()=>{
            props.loadProds();
        })
    }
    return (

        <Card style={{ width: '18rem' }}>
            {
                props.imageURL ? 
                <Card.Img variant="top" src={props.imageURL} height={150} width={150}/>
                :null
            }
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <b>{props.name}</b> <br/>
                    Price : {props.price} <br/>
                    Quantity : {props.quantity}
                </Card.Text>
                <Row>
                    <Col sm={6}><Button variant="primary" as={Link} to={`edit/${props._id}`}>Edit</Button></Col>
                    <Col sm={6}><Button variant="danger" onClick={(e)=>handleDelete(props._id)}>Delete</Button></Col>
                </Row>
            </Card.Body>
        </Card>

    )
}

export default Product;
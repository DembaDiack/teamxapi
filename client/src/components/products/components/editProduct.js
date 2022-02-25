import { React, useEffect, useState } from "react";
import { Form, Button, Container,Spinner,ProgressBar } from "react-bootstrap";
import { createProduct,getProduct,editProduct } from "../services/products.service";
import {uploadImage} from "../../firebase/images.firebase.service";
import {useParams,useNavigate} from "react-router-dom";

const EditProduct = () => {
    const params = useParams();
    const navigate = useNavigate(); 
    const initialState = {
        loading: false,
        image : null,
        uploading : false,
        progress : 0
    }
    const [state, setState] = useState(initialState);

    const handleInput = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
        console.log(state);
    }

    const handleImageUpload = async event => {
        if(event.target.files[0].type.split("/")[0] == "image") setState({...state,image : event.target.files[0]});
        uploadImage(state,setState);
    }

    const handleSubmit = async event => {
        event.preventDefault();
        setState({ ...state, loading: true });
        editProduct(state)
        .then(result => {
            console.log(result);
            return navigate("/products");
        })
        .finally(()=>{setState(initialState);})   
    }

    useEffect(async ()=>{
        if(params.id)
        {
            const product = await getProduct(params.id);
            setState({
                ...state,
                ...product.data
            });
            console.log(state);
        }
    },[]);

    useEffect(()=>{
        console.log(state);
    },[state])

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control defaultValue={state.name} onInput={(e) => handleInput(e)} name={"name"} type="text" placeholder="Enter product name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Price</Form.Label>
                    <Form.Control defaultValue={state.price} onInput={(e) => handleInput(e)} name={"price"} type="number" placeholder="Price of the product" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control defaultValue={state.quantity} onInput={(e) => handleInput(e)} name={"quantity"} type="number" placeholder="Quantity of product" />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Image of product (optional)</Form.Label>
                    <Form.Control onInput={(e) => handleImageUpload(e)} name={"image"} type="file" />
                    <ProgressBar className="mt-1" now={state.progress}/>
                </Form.Group>


                
                {
                    state.loading ?
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        :
                        <Button variant="primary" type="button" onClick={handleSubmit}>
                            Edit
                        </Button>
                }
                
            </Form>
        </Container>
    );
}

export default EditProduct;
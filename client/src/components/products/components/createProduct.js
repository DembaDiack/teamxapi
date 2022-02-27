import { React, useEffect, useState } from "react";
import { Form, Button, Container,Spinner,ProgressBar } from "react-bootstrap";
import { createProduct } from "../services/products.service";
import {uploadImage} from "../../firebase/images.firebase.service";
import {useNavigate} from "react-router-dom";

const CreateProduct = () => {
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

    const handleImageUpload = async(event) => {
        setState({
            ...state,
            image :null,
            filename : null,
            uploading : false
        })
        console.log(event.target.files);
        if(event.target.files[0].type.split("/")[0] == "image"){
            setState({
                ...state,
                uploading : true,
                image : event.target.files[0],
                filename : event.target.files[0].name
            });
            console.log(state);
            return await uploadImage(state.filename,event.target.files[0],(data)=>{
                setState({
                    ...state,
                    ...data
                })
                console.log("cb : ",data);
            });
        }
    }

    const handleSubmit = async event => {
        event.preventDefault();
        setState({ ...state, loading: true });
        createProduct(state)
        .then(result => {
            console.log(result);
            return navigate("/products");
        })
        .finally(()=>{setState(initialState);})   
    }

    useEffect(()=>{
        //test
        console.log(state);
    },[state]);

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control onInput={(e) => handleInput(e)} name={"name"} type="text" placeholder="Enter product name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Price</Form.Label>
                    <Form.Control onInput={(e) => handleInput(e)} name={"price"} type="number" placeholder="Price of the product" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control onInput={(e) => handleInput(e)} name={"quantity"} type="number" placeholder="Quantity of product" />
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
                        <Button variant="primary" type="button" onClick={handleSubmit} disabled={state.uploading}>
                            Submit
                        </Button>
                }
                
            </Form>
        </Container>
    );
}

export default CreateProduct;
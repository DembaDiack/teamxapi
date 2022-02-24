import { React,useState,useEffect } from "react";
import { Container,Form,Button,Spinner } from "react-bootstrap";
import { createUser } from "../services/user.service";
import {useNavigate} from "react-router-dom";

const CreateUser = () => {
    const navigate = useNavigate();

    const initialState = {
        loading : false
    }

    const [state,setState] = useState(initialState);

    const handleInput = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
        console.log(state);
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

    const handleSubmit = async event => {
        // event.preventDefault();
        // setState({ ...state, loading: true });
        // createUser(state)
        // .then(result => {
        //     console.log(result);
        //     return navigate("/users");
        // })
        // .finally(()=>{setState(initialState);})   
    }

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control onInput={(e) => handleInput(e)} name="firstname" type="text" placeholder="Enter first name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control onInput={(e) => handleInput(e)} name="lastname" type="text" placeholder="Enter last name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onInput={(e) => handleInput(e)} name="address" type="text" placeholder="Enter adress" />
                </Form.Group>
                

                {
                    state.loading ?
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        :
                        <Button variant="primary" type="button" onClick={handleSubmit}>
                            Submit
                        </Button>
                }

            </Form>
        </Container>
    )
}

export default CreateUser;
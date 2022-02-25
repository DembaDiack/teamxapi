import { React, useEffect, useState } from "react";
import User from "./user";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { listUsers } from "../services/user.service";

const ListUsers = () => {
    const initialState = {
        UsersList: [],
        loading: true
    }

    const [state, setState] = useState(initialState);
    useEffect(() => {
        loadUsers();
    }, []);
    

    const loadUsers = ()=> {
        // setState({
        //     ...state,
        //     loading :true
        // })
        listUsers()
            .then(result => {
                console.log(result);
                let temp = [];
                temp = result.data.map((user) => {
                    return <Col className={"mt-2"}>
                        <User 
                        key={user._id} 
                        firstname={user.firstname}
                        lastname={user.lastname}
                        address={user.address}
                        loadUsers={loadUsers}
                        _id={user._id}
                         />
                    </Col>
                });
                setState({
                    ...state,
                    UsersList: temp,
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
        <Container fluid="md" style={{display : "grid",gridColumnGap : "15px",justifyItems : "center"}}>
            <div>
                <h1>
                    users List
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
                        state.UsersList
                }
            </Row>
        </Container>
    )
}
export default ListUsers;
import { React } from "react";
import { Card, Row, Col, Button,ListGroup } from "react-bootstrap";
import {Link} from "react-router-dom";
import { deleteUser } from "../services/user.service";
const User = props => {

    const handleDelete = (id)=>{
        deleteUser(id)
        .then(()=>{
            props.loadUsers();
        })
    }

    return (
        <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    {props.firstname} {props.lastname}
                </ListGroup.Item>
                <ListGroup.Item>
                    {props.address}
                </ListGroup.Item>
                <ListGroup.Item>
                <Button variant="light" as={Link} to={`/edit/${props._id}`}>edit</Button>
                <Button variant="dark" onClick={(e)=>handleDelete(props._id)}>delete</Button>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default User;
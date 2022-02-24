import {React} from "react";
import {Alert} from "react-bootstrap";

const Alert = (props)=>{

    return(
        <Alert variant={props.variant}>
            {props.message}
        </Alert>
    )
}

export default Alert;
import {React, useEffect,useState} from "react";
import {Card} from "react-bootstrap";

const MessageBox = props => {
    const [state,setState] = useState(props.show);

    useEffect(()=>{
        if(props.show)
        {
            setTimeout(() => {
                props.show = false;
            }, 3000);
        }
    },[props.show]);

    return(
        <Card 
        className={"bg-dark"}
        style={{
            borderRadius: "7px",
            minWidth: "150px",
            height: "78px",
            position: "fixed",
            left: "10px",
            color: "white",
            bottom: props.show ? "10px" : "-100px",
            transition: "all 0.3s ease 0s"
        }}
        >
            <Card.Body>
                {props.message}
            </Card.Body>
        </Card>
    )
}


export default MessageBox;
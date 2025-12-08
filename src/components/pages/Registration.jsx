import { useContext, useRef } from "react"
import LogInStatus from "../../context/LogInStatusContext";
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router";

export default function Registration(props){
    const usernameRef = useRef("");
    const passwordRef = useRef("");
    const repeatPasswordRef = useRef("");
    const [loggedIn, setLoggedIn] = useContext(LogInStatus)
    const navigate = useNavigate();

    function checkRegister(){
        if(usernameRef.current.value === "" || passwordRef.current.value === "" || repeatPasswordRef.current.value === ""){
            alert("Please enter a username and password.");
        } else {
            if(passwordRef.current.value !== repeatPasswordRef.current.value){
                alert("Make sure your passwords are matching.");
            } else {
                storeInfo()
            }
        }
    }

    function storeInfo(){
        localStorage.setItem("userInfo",JSON.stringify({
                                            "username": usernameRef.current.value,
                                            "password": passwordRef.current.value,
                                            "repeatPassword": repeatPasswordRef.current.value 
        }))
        alert("You've been registered.")
        setLoggedIn(true)
        navigate("/myinfo")
    }

    return  <>
                <Form className="textInput" style={{width:'100%', 
                                                display:'flex', 
                                                justifyContent:'center', 
                                                alignContent:'center', 
                                                alignItems:'center',
                                                flexDirection:'column'}}>

                    <h1 className="pageTitle">Registration</h1>
                    <Form.Label htmlFor="usernameInput" id="usernameLabel">Username</Form.Label>
                    <Form.Control ref={usernameRef} id="usernameInput"></Form.Control>

                    <Form.Label htmlFor="passwordInput" id="passwordLabel">Password</Form.Label>
                    <Form.Control ref={passwordRef} id="passwordInput" type="password"></Form.Control>

                    <Form.Label htmlFor="repeatPasswordInput" id="repeatPasswordLabel">Repeat Password</Form.Label>
                    <Form.Control ref={repeatPasswordRef} id="repeatPasswordInput" type="password"></Form.Control>

                    <Button className="nonNavButton" style={{marginTop:"1em"}} onClick={checkRegister}>Register</Button> 
                </Form>
            </>
}
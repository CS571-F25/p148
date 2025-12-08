import { useRef, useState } from "react"
import { Form, Button } from "react-bootstrap"
export default function LoginPage(props){
    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("userInfo")));

    const usernameRef = useRef("");
    const passwordRef = useRef("");

    return  <>
                <Form className="textInput" style={{width:window.innerWidth, 
                                                    display:'flex', 
                                                    justifyContent:'center', 
                                                    alignContent:'center', 
                                                    alignItems:'center',
                                                    flexDirection:'column'}}>
                    <h1 className="pageTitle">Login</h1>
                    <Form.Label htmlFor="usernameInput" id="usernameLabel">Username</Form.Label>
                    <Form.Control ref={usernameRef} id="usernameInput"></Form.Control>

                    <Form.Label htmlFor="passwordInput" id="passwordLabel">Password</Form.Label>
                    <Form.Control ref={passwordRef} id="passwordInput" type="password"></Form.Control>

                    <Button className="nonNavButton" style={{marginTop:"1em"}}>Log In</Button> 
                </Form>
            </>
}
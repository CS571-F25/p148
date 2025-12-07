import { useState } from "react"
import TextInput from "../TextInput"
import { Form, Button } from "react-bootstrap"
export default function LoginPage(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return  <>
                <Form className="textInput" style={{width:window.innerWidth, 
                                                    display:'flex', 
                                                    justifyContent:'center', 
                                                    alignContent:'center', 
                                                    alignItems:'center',
                                                    flexDirection:'column'}}>
                    <h1 className="pageTitle">Login</h1>
                    <TextInput label="Username"/>
                    <TextInput label="Password" type="password"/>
                    <Button className="nonNavButton" style={{marginTop:"1em"}}>Log In</Button> 
                </Form>
            </>
}
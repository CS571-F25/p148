import { useRef } from "react"
import TextInput from "../TextInput"
import { Form, Button } from "react-bootstrap"

export default function Registration(props){
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const repeatPasswordRef = useRef(null);

    function register(){
        alert(usernameRef.current.value)
    }

    return  <>
                <Form className="textInput" style={{width:'100%', 
                                                display:'flex', 
                                                justifyContent:'center', 
                                                alignContent:'center', 
                                                alignItems:'center',
                                                flexDirection:'column'}}>

                    <h1 className="pageTitle">Registration</h1>
                    <TextInput label="Username" ref={usernameRef}/>
                    <TextInput label="Password" type="password" ref={passwordRef}/>
                    <TextInput label="Repeat Password" type="password" ref={repeatPasswordRef}/>
                    <Button className="nonNavButton" style={{marginTop:"1em"}} onClick={register}>Register</Button> 
                </Form>
            </>
}
import TextInput from "../TextInput"
import { Form } from "react-bootstrap"

export default function Registration(props){
    return <>
                <Form className="textInput" style={{width:window.innerWidth, 
                                                display:'flex', 
                                                justifyContent:'center', 
                                                alignContent:'center', 
                                                flexDirection:'column'}}>
                    <h1 className="pageTitle">Registration</h1>
                    <TextInput label="Username"/>
                    <TextInput label="Password"/>
                    <TextInput label="Repeat Password"/>
                </Form>
            </>
}
import TextInput from "../TextInput"
import { Form } from "react-bootstrap"
export default function LoginPage(props){
    return  <Form className="textInput" style={{width:window.innerWidth, 
                                                display:'flex', 
                                                justifyContent:'center', 
                                                alignContent:'center', 
                                                flexDirection:'column'}}>
                <TextInput label="Username"/>
                <TextInput label="Password"/>
            </Form>
}
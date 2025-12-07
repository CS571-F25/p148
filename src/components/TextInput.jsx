import { Form } from "react-bootstrap"

export default function TextInput(props){
    return (
        <Form.Group style={{ margin: '0 auto' }}>
            <Form.Label className="formLabel">{props.label}</Form.Label>
            <Form.Control style={{ width: 500}}/>
        </Form.Group>
    )
}
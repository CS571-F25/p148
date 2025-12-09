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
                register()
            }
        }
    }

    function register(){
        //Inits or adds to users "database"
        const bibNumber = Math.floor(Math.random() * 1000);
        if(localStorage.getItem("users") === null){
            localStorage.setItem("users", JSON.stringify([{ "username":usernameRef.current.value,
                                                            "password":passwordRef.current.value,
                                                            "bibNumber":bibNumber      
                                }]))
        } else {
            let arrOfUsers = JSON.parse(localStorage.getItem("users"))
            arrOfUsers.push({   "username":usernameRef.current.value,
                                "password":passwordRef.current.value,
                                "bibNumber":bibNumber      
                            })
            localStorage.setItem("users", JSON.stringify(arrOfUsers))
        }


        //Sets userInfo
        let arrOfUsers = JSON.parse(localStorage.getItem("users"))
        for(let i = 0; i < arrOfUsers.length; i++){
            if(usernameRef.current.value === arrOfUsers[i].username){
                localStorage.setItem("userInfo",JSON.stringify({
                                            "username": usernameRef.current.value,
                                            "password": passwordRef.current.value,
                                            "bibNumber": bibNumber
                                    }))
            }
        }

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
import { useEffect, useRef, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router";
export default function LoginPage(props){
    const [loggedIn, setLoggedIn] = useState(JSON.parse(localStorage.getItem("userInfo")));

    const usernameRef = useRef("");
    const passwordRef = useRef("");

    const navigate = useNavigate();

    function checkLogin(){
        let arrOfUsers = JSON.parse(localStorage.getItem("users"))
        for(let i = 0; i < arrOfUsers.length; i++){
            if(arrOfUsers[i].username === usernameRef.current.value){
                if(arrOfUsers[i].password === passwordRef.current.value){
                    localStorage.setItem("userInfo", JSON.stringify(arrOfUsers[i]))
                    login()
                }
            }
        }
    }

    function login(){
        alert("You've been logged in.")
        setLoggedIn(true)
        navigate("/myinfo")
    }

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

                    <Button className="nonNavButton" style={{marginTop:"1em"}} onClick={checkLogin}>Log In</Button> 
                </Form>
            </>
}
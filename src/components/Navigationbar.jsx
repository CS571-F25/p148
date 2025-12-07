import { Nav, Button, Navbar, Image } from "react-bootstrap";
import { HashRouter, Routes, Route, NavLink} from "react-router";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import Registration from "./pages/registration";
import Course from "./pages/Course";
import MyInfo from "./pages/MyInfo";

import CrazyLegsLogo from "./../assets/crazyLegsLogo.png";
import { useContext } from "react";
import LogInStatus from "../context/LogInStatusContext";

export default function Navigationbar(props){
    const [loggedIn, setLoggedIn] = useContext(LogInStatus);

    return  <div style={{width:window.innerWidth, 
                        display:'flex', 
                        justifyContent:'center', 
                        alignContent:'center', 
                        flexDirection:'column'}}>
                <Navbar>   
                <HashRouter>
                    <Nav id="navBar" >
                        <Button className="navButton">
                            <NavLink className="link" to="/">Home</NavLink>
                        </Button>
                        <Button className="navButton">
                            <NavLink className="link" to="/registration">Registration</NavLink>
                        </Button>
                        <Button className="navButton">
                            {loggedIn ?
                            <NavLink className="link" to="/myinfo">My Info</NavLink>
                            :
                            <NavLink className="link" to="/login">Login</NavLink>}
                        </Button>
                        <Button className="navButton">
                            <NavLink className="link" to="/course">Course</NavLink>
                        </Button>
                
                        <Image src={CrazyLegsLogo} height="70rem" width="150rem" alt="Crazy Legs Classic Logo"/>
                    </Nav>
                    <Routes>
                        <Route path="/" element={<Homepage className="page"/>}/>
                        <Route path="/registration" element={<Registration/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/myinfo" element={<MyInfo/>}/>
                        <Route path="/course" element={<Course/>}/>
                    </Routes>
                </HashRouter> 
            </Navbar>
        </div>
}
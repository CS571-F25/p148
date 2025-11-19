import { Nav, Button, Navbar, Image } from "react-bootstrap";
import { HashRouter, Routes, Route, NavLink} from "react-router";
import Homepage from "./../pages/Homepage";
import LoginPage from "./pages/LoginPage";
import Registration from "./pages/registration";
import Course from "./pages/course";

import CrazyLegsLogo from "./../assets/crazyLegsLogo.png";

export default function Navigationbar(props){
    return  <Navbar>
                <HashRouter>
                    <Nav id="navBar" >
                        <Button className="navButton">
                            <NavLink className="link" to="/">Home</NavLink>
                        </Button>
                        <Button className="navButton">
                            <NavLink className="link" to="/registration">Registration</NavLink>
                        </Button>
                        <Button className="navButton">
                            <NavLink className="link" to="/login">Login</NavLink>
                        </Button>
                        <Button className="navButton">
                            <NavLink className="link" to="/course">Course</NavLink>
                        </Button>
                
                        <Image src={CrazyLegsLogo} height="70rem" width="150rem" alt="Crazy Legs Classic Logo"/>
                    </Nav>
                    <Routes>
                        <Route path="/" element={<Homepage className="page"/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/course" element={<Course/>}/>
                        <Route path="/registration" element={<Registration/>}/>
                    </Routes>
                </HashRouter> 
            </Navbar>
}
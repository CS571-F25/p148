import { useContext } from "react"
import { Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router"
import LogInStatus from "../../context/LogInStatusContext"
import InfoCard from "../InfoCard"

export default function MyInfo(props){
    const navigate = useNavigate()
    const [loggedIn, setLoggedIn] = useContext(LogInStatus)

    function signout(){
        localStorage.removeItem("userInfo")
        setLoggedIn(false)
        navigate("/")
    }

    return  <div style={{width:'100%', 
                        display:'flex', 
                        justifyContent:'center', 
                        alignContent:'center', 
                        alignItems:'center',
                        flexDirection:'column'}}>

                <h1 className="pageTitle">Info</h1>
                <InfoCard/>
                <Button className="nonNavButton" style={{marginTop:"1em"}} onClick={signout}>Sign Out</Button> 
            </div>
}
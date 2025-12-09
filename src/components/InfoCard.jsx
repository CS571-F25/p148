import { Card } from "react-bootstrap"

export default function InfoCard(props){
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))

    return <Card>
                <p id="cardHeader">{userInfo.username}</p>
                <p id="cardText">Bib Number: {userInfo.bibNumber}</p>
                <p id="cardText">The Race starts on Saturday, April 26, 2025 at 10:00 AM CDT at Library Mall</p>
            </Card> 
}
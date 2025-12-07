import { Container, Row, Col, Image } from "react-bootstrap"
import ImageCarousel from "../ImageCarousel"
import SponsorScrollBar from "../SponsorScrollBar"
import ContentBreak from "../ContentBreak"
import WiscLogo from '../../assets/WiscLogo.png'

export default function Homepage(props){
    return  <div style={{width:window.innerWidth, 
                        display:'flex', 
                        justifyContent:'center', 
                        alignContent:'center', 
                        flexDirection:'column',
                        placeContent:'left'}}>             
                <ImageCarousel/>

                <br/>
                <div style={{display:'flex', 
                            flexDirection:'row', 
                            justifyContent:'center', 
                            alignContent:'center'}}>
                    <h1 className="pageTitle">Crazylegs Classic</h1>
                    <Image src={WiscLogo} style={{height:"70px", paddingLeft:"20px", paddingTop:"20px"}}/>
                </div>

                <ContentBreak text="About Us"/>

                <Container>
                    <Row>
                        <Col>
                            <p className="homepageText">
                                The last Saturday of April each spring, Badgers descend on Capitol Square and State Street to 
                                kick off the Crazylegs Classic. 
                            </p>
                            <br/>
                            <p className="homepageText"> 
                                Not surprisingly, the idea for this event was hatched in late 1981 by three Badger loyalists at
                                a campus bar. The three, Tom Grantham, Ken Sparks, and Rich Backus, wanted to raise money to
                                support UW Athletics. As admirers of then Athletic Director Elroy Hirsch, they asked his permission
                                to name it the "Crazylegs Run" in his honor. 
                            </p>
                            <br/>
                            <p className="homepageText">
                                The first race in 1982 attracted 1,525 runners and raised $9,500. The event grew in popularity and
                                the walk was added in 1987 with 676 walkers the first year. The event has grown substantially reaching
                                a record high of 20,415 in 2010. Since the inaugural race 43 years ago, it has attracted over 354,000 
                                runners and walkers. The Crazylegs Classic has become a time–honored tradition of the University of 
                                Wisconsin, as well as a much–anticipated event to kickoff spring in the Madison community. 
                            </p>
                        </Col>
                    </Row>
                </Container>

                <ContentBreak text="Sponsors"/>

                <SponsorScrollBar/>
            </div>
}
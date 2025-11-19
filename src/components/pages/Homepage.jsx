import { useState } from "react"
import { Container, Row, Col, Carousel, Image} from "react-bootstrap"

import CImag1 from "./../../assets/carousel1.jpg"

export default function Homepage(props){
        const [carouselIndex, setCarouselIndex] = useState(0);    
        
        function handleCarouselSelect(){
            setCarouselIndex(carouselIndex+1);
        }

        return  <>  
                    <Container>
                        <Carousel activeIndex={carouselIndex} onSelect={handleCarouselSelect} interval={1000} height="100px" width="100px">
                            <Carousel.Item>
                                <Image src={CImag1} width="100px" height="100px"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={CImag1}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={CImag1}/>
                            </Carousel.Item>
                        </Carousel>
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
                </>
}
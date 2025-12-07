import { Carousel, Image } from "react-bootstrap";
import CImag1 from "./../assets/carousel1.jpg"
import CImag2 from "./../assets/carousel2.jpg"
import CImag3 from "./../assets/carousel3.jpg"
import CImag4 from "./../assets/carousel4.jpg"

export default function ImageCarousel(props){
    return <Carousel className="carousel" indicators={false} fluid={true} width="100%" >
                <Carousel.Item>
                    <Image src={CImag1} height="100%" width="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={CImag2} height="100%" width="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={CImag3} height="100%" width="100%"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={CImag4} height="100%" width="100%"/>
                </Carousel.Item>
            </Carousel> 
}
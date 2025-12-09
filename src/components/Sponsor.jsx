import { Image } from "react-bootstrap";
export default function Sponsor(props){
    return  <>
                <Image src={props.image} style={{paddingLeft: 20, paddingRight: 20}} alt={props.altText}/>
            </>
}
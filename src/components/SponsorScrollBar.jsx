import Everlight from "./../assets/everlight.png";
import JDMcCormick from "./../assets/jdmccormick.png";
import Mueller from "./../assets/mueller.png";
import Odyssey from "./../assets/odyssey.png";
import WMTV from "./../assets/15wmtv.png";
import Sponsor from "./Sponsor.jsx";

export default function SponsorScrollBar(props){
    let arrayOfSponsorImages = [Everlight, JDMcCormick, Mueller, Odyssey, WMTV];
    let arrayOfAltText = ["Everlight Logo", "JDMcCormick Logo","Mueller Logo","Odyssey Logo","15WMTV Logo"]

    return  <>
                <div className="sponsor-scroll-container">
                    <div className="sponsor-scroll-group">
                        {arrayOfSponsorImages.map((image, index) => (<Sponsor image={image} index={index} altText={arrayOfAltText[index]}/>))}
                    </div>
                    <div aria-hidden className="sponsor-scroll-group">
                        {arrayOfSponsorImages.map((image, index) => (<Sponsor image={image} index={index} altText={arrayOfAltText[index]}/>))}
                    </div>
                </div>
            </>
}
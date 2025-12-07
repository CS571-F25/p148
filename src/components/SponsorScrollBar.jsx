import EverlightImage from "./../assets/everlight.png";
import JDMcCormickImage from "./../assets/jdmccormick.png";
import Mueller from "./../assets/mueller.png";
import Odyssey from "./../assets/odyssey.png";
import WMTV from "./../assets/15wmtv.png";
import Sponsor from "./Sponsor.jsx";

export default function SponsorScrollBar(props){
    let arrayOfSponsorImages = [EverlightImage, JDMcCormickImage,Mueller, Odyssey, WMTV];

    return  <>
                <div className="sponsor-scroll-container">
                    <div className="sponsor-scroll-group">
                        {arrayOfSponsorImages.map(image => (<Sponsor image={image}/>))}
                    </div>
                    <div aria-hidden className="sponsor-scroll-group">
                        {arrayOfSponsorImages.map(image => (<Sponsor image={image}/>))}
                    </div>
                </div>
            </>
}
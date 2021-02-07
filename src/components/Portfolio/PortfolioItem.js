import "../../index.css";

import Photo from "./PortfolioPhoto.js";
import InfoBox from "./InfoBox.js";

export default function PortfolioItem(props) {
    return (
        <div className="portfolioItem">
            <Photo imgPath={props.data.imgPath} name={props.data.name} />
            <InfoBox name={props.data.name} description={props.data.description} />
        </div>
    )
}
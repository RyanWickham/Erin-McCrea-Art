import "../../index.css";

import {useParams} from 'react-router-dom'; 

//file that contains information about images
import {dataFile} from "../../Images/imageData.js";

import Item from "./PortfolioItem.js";
export default function Portfolio() {
    const { pageType } = useParams();

    const portfolioType = pageType==='acrylic' ? "Acrylic Paintings" : pageType==='drawing' ? 'Drawings' : '';

    return (
        <div className="portfolioPage">
            <h1 className="pageHeading">{portfolioType}</h1>

            {/* Make a list of images that type is the same as pageType, then */}
            {/* Convert the list into Items components -> i is the current index for a unique key */}
            {dataFile.filter(data => data.type===pageType).map((data, i) => {return <Item key={i} data={data}/>})}
        </div>
    )
}
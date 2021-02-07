import "../../index.css";
import {dataFile} from "./dataFile.js";

import Item from "./PortfolioItem.js";
export default function Portfolio() {
    const portfolioType = "Acrylic Paintings";

    return (
        <div className="portfolioPage">
            <h1 id="pageHeading">{portfolioType}</h1>

            {/* Convert dataFile into Items components -> i is the current index for a unique key */}
            {dataFile.map((data, i) => {return <Item key={i} data={data}/>})}
        </div>
    )
}
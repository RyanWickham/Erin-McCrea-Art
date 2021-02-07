import "../../index.css";

import Quantity from './Quantity.js';
import Size from './Size.js';

export default function PrintShopPage() {
    const artName = "Name";
    const artDescription = "Description Description Description Description Description Description";

    const artImage = require(`../Portfolio/Images/6.png`).default;

    return (
        <div className="printShopPage">
            <div className="pageSplitDiv">
                <div className="page40WidthDiv printShopImgDiv">
                    <img src={artImage} alt=""></img>
                </div>

                {/* Right side of page */}
                <div className="page40WidthDiv artistStatementTextDiv">
                    <h1 id="printPageHeading">{artName}</h1>
                    <p className='printPageDescription'>{artDescription}</p>

                    <Size />
                    <Quantity />
                </div>
            </div>
        </div>
    )
}
import "../../index.css";

import {useParams} from 'react-router-dom'; 

import Quantity from './Quantity.js';
import Size from './Size.js';

//file that contains information about images
import {dataFile} from "../../Images/imageData.js";

export default function PrintShopPage() {
    const { id } = useParams();

    const artName = "Name";
    const artDescription = "Description Description Description Description Description Description";

    const imageData = dataFile.filter(data => data.imageFileName===id);
    const artImage = require(`../../Images/art/${id}.${imageData.fileType}`).default;

    return (
        <div className="printShopPage">
            <div className="pageSplitDiv">
                <div className="page40WidthDiv printShopImgDiv">
                    <img src={artImage?artImage:''} alt=""></img>
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
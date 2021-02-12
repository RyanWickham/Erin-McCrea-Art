import "../../index.css";

export default function PortfolioPhoto(props) {
    const name = props.name;
    //load the image from local file
    const imgPath = props.imgPath;
    const img = require(`../../Images/art/${imgPath}`).default;

    return (
        <div className="portfolioPhoto">
            <img id="portfolioPhoto" src={img} alt={name} />
        </div>
    )
}

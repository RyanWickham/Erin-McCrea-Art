import "../../index.css";

export default function PortfolioInfoBox(props) {
    return (
        <div className="portfolioInfoBox">
            <h2 id="portfolioItemName">{props.name}</h2>
            <div className="portfolioItemDescription">
                <p>{props.description}</p>
            </div>
        </div>
    )
}
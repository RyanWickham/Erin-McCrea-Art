import "../../index.css";

export default function Quantity() {
    const amount = 1;

    return (
        <div className="printShopQuantityDiv">
            <span className="quantitySpan"> 
                QUANTITY:
            </span>
            <span className="buttonSpan">
                <button>-</button>
                {amount}
                <button>+</button>
            </span>
        </div>
    )
}

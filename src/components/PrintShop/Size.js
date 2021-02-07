import "../../index.css";

export default function Size() {
    return (
        <div className="printShopSizesDiv">
            <span className="sizeSpan"> 
                SIZE:
            </span>
            <span className="buttonSpan">
                <button>210x297</button>
                <button>297x4420</button>
                <button>420x594</button>
                <button>593x841</button>
            </span>
        </div>
    )
}

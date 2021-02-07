import "../../index.css";

export default function ArtistStatement() {
    const img = require(`../Portfolio/Images/6.png`).default;

    return (
        <div className="artistStatementPage">
            <h1 id="pageHeading">Hi, I'm Erin.<br />Nice to meet you! :)</h1>

            {/* Split section in half -> left side photo, right side text */}
            <div className="pageSplitDiv">
                <div className="page40WidthDiv artistStatementImgDiv">
                    <img src={img} alt=""></img>
                </div>

                <div className="page45WidthDiv artistStatementTextDiv">
                    <p>My name is Erin McCrea and I am an artist residing in the quiet and serene Southern Highlands in NSW. Growing up in the Southern Highlands has provided me with an abundance of inspiration. Surrounded by copious amount of wildlife, never ending hills, and thriving bush land, I doubt I will ever leave.</p>
                    <br />
                    <p>As a child I was full of curiosity and wonder with the natural world around me. From watching birds play in the garden, to collecting fascinating rocks and flowers. Naturally I enjoyed recreating the world around me with anything I could, crayons, markers, pencils, and paints. To this day I can be found doing the same thing in my home studio.</p>
                    <br />
                    <p>My medium of choice is often acrylic paints and pencils, as I feel these best capture the subjects that spark my curiosity. The living world around me is a muse for my creative works, referencing landscapes and wildlife in my art.</p>
                    <br />

                    <i>Fell free to send me an email: <b><a href="mailto: ErinMcCreaArt@gmail.com">ErinMcCreaArt@gmail.com</a></b></i>
                </div>
            </div>
        </div>
    )
}
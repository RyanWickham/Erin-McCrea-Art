import "../../index.css";

export default function ArtistStatement() {
    return (
        <div className="CommissionsPage">
            <h1 className="pageHeading">Commissions</h1>

            {/* Main text to describe the process */}
            <section className='mainSection'>
                <p>Commissions are available by request. If you are interested in a commissioned piece, please contact me via email. 
                    At the bottom of the page are some standard commission sizing and prices. If you are after a custom size, multiple 
                    subjects (more than 2) or still life/landscape artwork, please contact me via email to discuss your needs and a 
                    quote/time frame will be supplied. Times may vary, but care will be taken to notify the client if any time-related 
                    changes arise. Commissions are done in either graphite pencil on fine art paper or acrylic paint on canvas.</p>

                <p>To achieve high-quality artwork, it is advised to supply high-quality photographs of your subjects. Photos 
                    should not be blurred or pixelated, and close to the camera. If photos are of poor quality, the commission may 
                    be rejected. To produce good quality photos, make sure the subject has good focus, and the lighting is not 
                    too bright. It can help to supply several photographs to be used as references. A non-refundable deposit 
                    of 25% of the quoted cost will be required before commencement of the artwork. Full payment will be required 
                    at the completion of the artwork, and before postage. Postage will vary depending on the artwork.</p>
            </section>

            {/* Dot points of things to include in email */}
            <section className='neededInfoSection'>
                <h2 className='pageSubHeading'>Information Needed</h2>
                <ul>
                    <li>What media you would like the artwork in. Currently offered is graphite on fine art paper or acrylic on canvas.</li>
                    <li>What size would you like the artwork?</li>
                    <ul>
                        <li>Drawings are often done in sizes such as A4, A3 etc.</li>
                        <li>Paintings will often be measured in inches such as 12x12” or 20x24”.</li>
                    </ul>
                    <li>For portraits, a clear and crisp reference image of the subject is required. This is especially important. 
                        To capture the “likeness” of a subject, a clear photograph is needed. Pixelated or blurry images will not be accepted. 
                        Please ensure you get a good clear photo if possible, supply several photos for portraits.</li>
                    <li>How many subjects you would like in your artwork? Each additional subject will increase the cost of the artwork.</li>
                    <li>An idea of what you would like to spend; this can be discussed to meet your needs. Generally, a painting will be more expensive than a drawing. The size and number of subjects will affect the pricing also.</li>
                </ul>
            </section>
        </div>
    )
}
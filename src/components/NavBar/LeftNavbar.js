import '../../index.css';

export default function LeftNavbar() {
    return(
        <div className="left-menu">
            <div id="nav-heading">Erin McCrea Art</div>
            <ul className="vr-nav">
                <li><a href="#a">Portfolio</a></li>
                <ul className="nav-sub-list">
                <li><a href="#a">- Acrylic Paintings</a></li>
                    <li><a href="#a">- Drawings</a></li>
                </ul>

                <li><a href="#a" className="active">Artist Statement</a></li>
                <li><a href="#a">Comissions/Contact</a></li>
            </ul>
        </div>
    );
}
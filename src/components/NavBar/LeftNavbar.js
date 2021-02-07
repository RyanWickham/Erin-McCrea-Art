import '../../index.css';

import { NavLink } from 'react-router-dom';

export default function LeftNavbar() {
    return(
        <div className="left-menu">
            <div id="nav-heading"><NavLink to="/">Erin McCrea Art</NavLink></div>
            <ul className="vr-nav">
                <li><NavLink to="/Portfolio">Portfolio</NavLink></li>
                <ul className="nav-sub-list">
                    <li><NavLink to="/Portfolio/acrylic">- Acrylic Paintings</NavLink></li>
                    <li><NavLink to="/Portfolio/drawings">- Drawings</NavLink></li>
                </ul>

                <li><NavLink to="/ArtistStatement">Artist Statement</NavLink></li>
                <li><NavLink to="/Commissions">Commissions/Contact</NavLink></li>
            </ul>
        </div>
    );
}
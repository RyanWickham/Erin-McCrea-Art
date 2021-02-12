import '../../index.css';

import { NavLink, useLocation } from 'react-router-dom';

export default function LeftNavbar() {
    const { pathname } = useLocation();

    return(
        <div className="left-menu">
            <div id="nav-heading"><NavLink to="/">Erin McCrea Art</NavLink></div>
            <ul className="vr-nav">
                <li><NavLink to="/Portfolio/acrylic" isActive={() => ['/Portfolio/acrylic', '/Portfolio/drawing'].includes(pathname)}>Portfolio</NavLink></li>
                <ul className="nav-sub-list">
                    <li><NavLink to="/Portfolio/acrylic">- Acrylic Paintings</NavLink></li>
                    <li><NavLink to="/Portfolio/drawing">- Drawings</NavLink></li>
                </ul>

                <li><NavLink to="/ArtistStatement" isActive={() => ['/ArtistStatement', '/'].includes(pathname)}>Artist Statement</NavLink></li>
                <li><NavLink to="/Commissions">Commissions/Contact</NavLink></li>
            </ul>
        </div>
    );
}
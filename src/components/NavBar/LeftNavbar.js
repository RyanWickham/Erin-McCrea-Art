import '../../index.css';

import { NavLink, useLocation } from 'react-router-dom';
import SocialIcons from './SocialIcons/SocialIcons.js';

export default function LeftNavbar() {
    const { pathname } = useLocation();

    return(
        <nav className="left-menu">
            <div className="nav-heading"><NavLink to="/">Erin McCrea Art</NavLink></div>
            <div className="vr-nav">
                <ul>
                    <li><NavLink to="/Portfolio/acrylic" isActive={() => ['/Portfolio/acrylic', '/Portfolio/drawing'].includes(pathname)}>Portfolio</NavLink></li>
                    <ul className="nav-sub-list">
                        <li><NavLink to="/Portfolio/acrylic">- Acrylic Paintings</NavLink></li>
                        <li><NavLink to="/Portfolio/drawing">- Drawings</NavLink></li>
                    </ul>

                    <li><NavLink to="/ArtistStatement" isActive={() => ['/ArtistStatement', '/'].includes(pathname)}>Artist Statement</NavLink></li>
                    <li><NavLink to="/Commissions">Commissions / Contact</NavLink></li>
                    {/* <li className='socialIcons-li'><SocialIcons /></li> */}
                </ul>

                <div className='socialIconsDiv'><SocialIcons /></div>
            </div>
            
        </nav>
    );
}
import '../../../index.css';

import { NavLink, useLocation } from 'react-router-dom';

export default function SideDrawer (props) {
    const { pathname } = useLocation();

    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><NavLink to="/Portfolio/acrylic" isActive={() => ['/Portfolio/acrylic', '/Portfolio/drawing'].includes(pathname)}>Portfolio</NavLink></li>
                <ul className="nav-sub-list">
                    <li><NavLink to="/Portfolio/acrylic">- Acrylic Paintings</NavLink></li>
                    <li><NavLink to="/Portfolio/drawing">- Drawings</NavLink></li>
                </ul>

                <li><NavLink to="/ArtistStatement" isActive={() => ['/ArtistStatement', '/'].includes(pathname)}>Artist Statement</NavLink></li>
                <li><NavLink to="/Commissions">Commissions / Contact</NavLink></li>
            </ul>
        </nav>
    );
};
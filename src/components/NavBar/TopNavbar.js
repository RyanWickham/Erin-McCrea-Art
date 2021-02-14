import '../../index.css';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import SideDrawer from './SideDrawer/SideDrawer.js';
import Backdrop from '../Backdrop/Backdrop.js';

export default function TopNavbar(props) {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const drawerToggleClickHandler = () => {
        setSideDrawerOpen(!sideDrawerOpen);
    };
    const backdropClickHandler = () => {
        setSideDrawerOpen(false);
    }

    return (
        <header className='top-menu'>
            <nav className='top-menu-container'>
                    {/* Controls the side menu when hamburger button is clicked */}
                    <div>
                        <DrawerToggleButton click={drawerToggleClickHandler}/>
                        <SideDrawer show={sideDrawerOpen}/>
                        {sideDrawerOpen && <Backdrop click={backdropClickHandler}/>}
                    </div>
                    <div className='nav-heading'><NavLink to="/">Erin McCrea Art</NavLink></div>
            </nav>
        </header>
    )
}
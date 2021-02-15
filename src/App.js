import './App.css';

import { Switch, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

import LeftNavbar from './components/NavBar/LeftNavbar.js';
import TopNavbar from './components/NavBar/TopNavbar.js';

import Portfolio from './components/Portfolio/index.js'
import ArtistStatement from './components/ArtistStatement/index.js'
import Commissions from './components/Commissions/index.js'
import PrintShopPage from './components/PrintShop/index.js';

function App() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 901px)' });
  //const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <div className="App" style={{height: '100%'}}>
      {/* If the screen is a big screen like desktop or tablet set nevigation bar correctly */}
      { isDesktopOrLaptop ? <LeftNavbar /> : <TopNavbar />}

      <main className={isDesktopOrLaptop ? "vr-side" : ""}>
        <Switch>
          <Route path="/printShop/:id">
            <PrintShopPage desktopDisplay={isDesktopOrLaptop} />
          </Route>
          <Route path="/portfolio/:pageType">
            <Portfolio desktopDisplay={isDesktopOrLaptop} />
          </Route>
          <Route path="/artistStatement">
            <ArtistStatement desktopDisplay={isDesktopOrLaptop} />
          </Route>
          <Route path="/commissions">
            <Commissions desktopDisplay={isDesktopOrLaptop} />
          </Route>
          <Route path='/'>
            <ArtistStatement desktopDisplay={isDesktopOrLaptop} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
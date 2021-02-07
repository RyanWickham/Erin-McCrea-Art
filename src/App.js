import './App.css';

import { Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar/LeftNavbar.js';

import Portfolio from './components/Portfolio/index.js'
import ArtistStatement from './components/ArtistStatement/index.js'
import Commissions from './components/Commissions/index.js'
import PrintShopPage from './components/PrintShop/index.js';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Keeps content to the right of the nav bar */}
      <div className="vr-side">
        <Switch>
          <Route path="/printShop/:id">
            <PrintShopPage />
          </Route>
          <Route path="/portfolio/:pageType">
            <Portfolio />
          </Route>
          <Route path="/artistStatement">
            <ArtistStatement />
          </Route>
          <Route path="/commissions">
            <Commissions />
          </Route>
          <Route path='/'>
            <ArtistStatement />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

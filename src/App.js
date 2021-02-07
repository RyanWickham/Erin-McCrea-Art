import './App.css';

import { Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar/LeftNavbar.js';

import Portfolio from './components/Portfolio/index.js'
import ArtistStatement from './components/ArtistStatement/index.js'
import Commissions from './components/Commissions/index.js'
import PrintShopPage from './components/Commissions/index.js';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Keeps content to the right of the nav bar */}
      <div className="vr-side">
        <Switch>
          <Route path="/artistStatement">
            <ArtistStatement />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/comissions">
            <Commissions />
          </Route>
          <Route path="/shop">
            <PrintShopPage />
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

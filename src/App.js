import './App.css';

import Navbar from './components/NavBar/LeftNavbar.js';
import PrintShopPage from './components/Commissions/index.js';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Keeps content to the right of the nav bar */}
      <div className="vr-side">
        <PrintShopPage />
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './assets/css/style.css';

import Navbar from './ReactComponents/Navbar.js';
import Intro from './ReactComponents/Intro.js';
function App() {
  
  return (
    <div className="container-fluid" >
          <Navbar />
          <Intro />
          
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './assets/css/style.css';

import Navbar from './ReactComponents/Navbar.js';
import Intro from './ReactComponents/Intro.js';
import Companies from './ReactComponents/Companies.js';
import Servies from './ReactComponents/Services.js';
import Testimonials from './ReactComponents/Testimonials';
function App() {
  
  return (
    <div  className="container-fluid bg-white" >
          <Navbar />
          <Intro />
          <Companies />
          <Servies />
          <Testimonials />
    </div>
  );
}

export default App;

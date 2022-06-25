import './App.css';
import Home from './Components/home/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import { About } from './Components/about/About';
import { Product } from './Components/product/Product';
import { Contact} from './Components/contact/Contact';

function App() {
  return (
      <Router>
        <Routes>
        
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/Navbar' element={<Navbar />}></Route>
          <Route exact path='/About' element={<About />}></Route>
          <Route exact path='/Product' element={<Product />}></Route>                 
          <Route exact path='/Contact' element={<Contact />}></Route>                 
      </Routes>
     </Router>
  );
}

export default App;

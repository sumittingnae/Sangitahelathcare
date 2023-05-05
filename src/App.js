//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Process from './Process/Process';
import Appointmnet from './Appoinment/Appoinment';
import Testimonals from './Testimonal/Testimonal';
import Contact from './contact/Contact';
import Docters from './docters/docter';
import Service from './service/service';
import Blog from './blog/blog';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Process" element={<Process />}></Route>
          <Route path="/Appointmnet" element={<Appointmnet />}></Route>
          <Route path="/Testimonal" element={<Testimonals />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Docter" element={<Docters />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

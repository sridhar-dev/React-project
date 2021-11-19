import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Alumni from './components/Alumni';
import Bootcamp from './components/Bootcamp';
import Contact from './components/Contact';
import Login from './components/Login';
import Payment from './components/Payment';
import DemoForm from './components/DemoForm';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';




function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="Head"> 
          <Header />

        </div>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/alumni" element={<Alumni />} />
        <Route  path="/bootcamp" element={<Bootcamp />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/payment" element={<Payment />} />
        <Route  path="/signup" element={<DemoForm />} />

      </Routes>
       
    </div>
    <div className="Foot">
      <Footer />
       </div>

    </React.Fragment>
    </Router>
  );
}

export default App;

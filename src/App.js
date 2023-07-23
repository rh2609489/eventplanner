import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Home from './pages/homepage';
import ContactUs from './pages/contactus';
import Navbar from './pages/Navbar/navbar';
import Footer from './pages/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/contact" Component={ContactUs} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
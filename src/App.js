import './App.css';
import NavBar from './components/Navbar'
import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router basename="/React-Portfolio">
            <NavBar />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App;

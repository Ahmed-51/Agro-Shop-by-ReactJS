import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutusAgro from './pages/AboutusAgro';
import Vision from './pages/Vision';
import EdibleOils from './pages/EdibleOils'
import Sugar from './pages/Sugar'
import Nuts from './pages/Nuts'
import Rice from './pages/Rice'
import Beef from './pages/Beef'
import SupplyChain from './pages/SupplyChain'
import Quality from './pages/Quality'
import Market from './pages/Market'
import News from './pages/News'
import Career from './pages/Career'
import ContactUs from './pages/ContactUs'


function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' exact element= {<Home />} />
          <Route path='/aboutusagro' element= {<AboutusAgro />} />
          <Route path='/vision' element= {<Vision />} />
          <Route path='/edibleoils' element= {<EdibleOils />} />
          <Route path='/sugar' element= {<Sugar />} />
          <Route path='/nuts' element= {<Nuts />} />
          <Route path='/rice' element= {<Rice />} />
          <Route path='/beef' element= {<Beef />} />
          <Route path='/supplychain' element= {<SupplyChain />} />
          <Route path='/quality' element= {<Quality />} />
          <Route path='/market' element= {<Market />} />
          <Route path='/news' element= {<News />} />
          <Route path='/career' element= {<Career />} />
          <Route path='/contactus' element= {<ContactUs />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

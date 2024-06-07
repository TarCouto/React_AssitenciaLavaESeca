import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Footer from './components/Footer'

export default function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

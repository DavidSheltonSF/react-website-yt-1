import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'

function App() {
  return (
    
    <>
      <Router>
        <Navbar/> 
        <Routes>
         <Route path='/react-website-yt-1' exact element={<Home/>} />
         <Route path='/react-website-yt-1/services' exact element={<Services/>} />
         <Route path='/react-website-yt-1/products' exact element={<Products/>} />
         <Route path='/react-website-yt-1/sign-up' exact element={<SignUp/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App

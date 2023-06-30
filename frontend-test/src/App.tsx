import Home from "./components/home/Home"
import Results from "./components/results/Results";
import Footer from "./components/shared/footer/Footer"
import Navbar from "./components/shared/navbar/Navbar"
import { Routes, Route} from "react-router-dom";
import SearchProvider from './context/SearchProvider';


function App() {

  return (
    <SearchProvider>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/results" element={<Results/>} />  
        </Routes>
      <Footer/> 
  </SearchProvider>
  )
}

export default App

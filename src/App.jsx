import { useEffect } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Explore from './components/Explore/Explore';
import Navbar from './components/Navbar/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      <Navbar />
      <Banner />
      <Explore /> 
    </div>
  );
}

export default App

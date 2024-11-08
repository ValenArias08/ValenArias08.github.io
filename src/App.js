import { Route, Routes} from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Galery from "./Components/Galery";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";
import Lottie from  "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const[Loading,SetLoading]=useState(true);

  useEffect(()=>{
    SetLoading(true)

    setTimeout(()=>{
      SetLoading(false)
    },1900)
  },[])  
  
  return (
    <>
      {Loading ? (
      <div className="loader"> 
        <HashLoader
          color={'#9067C6'}
          loading={true}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      ):(
      <div>
      
      <Lottie className="bg" animationData={nightsky} loop={true} /> 
      <Lottie className="bgtwo" animationData={nightsky} loop={true} />   
      <Lottie className="bgtemp" animationData={nightsky} loop={true} />

      <Nav/>
      <MoveToTop/>

      <Routes>
        <Route index path="/portfolio" element={<Home/>} />
        <Route path="/portfolio/about" element={<About/>}/>
        <Route path="/portfolio/project" element={<Project/>}/>
        <Route path="/portfolio/resume" element={<Resume/>}/>
        <Route path="/portfolio/galery" element={<Galery/>}/>
      </Routes>
      
      <Footer/>
      </div>
      )}  
    </>
  );
}

export default App;

import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import PixelAvatar from '../images/PixelAvatar.gif';
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import { BiDonateHeart } from "react-icons/bi";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hola!</h1>
          <h1>Soy <b>Valentina Arias</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Breve <b>introducción</b></h1>
          <p>
          Soy apasionada por convertir ideas en experiencias de juego inmersivas, enfocándome en personajes detallados en <b>pixel art</b>. 
          Cuento con habilidades en C#, <b>Unity</b> y Aseprite, y busco oportunidades para expandir mis conocimientos en arte pixelado y Blender. 
          <b> Disfruto</b> dibujar y explorar nuevas ideas para enriquecer el desarrollo de videojuegos.         <BiDonateHeart style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='PixelAvatar' src={PixelAvatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home
import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >¡Conoce más <b>sobre</b> mí!</h1>
          <p>
          Hola, soy <b>Valentina Arias</b> de Bogotá, Colombia, y me especializo en el <b>diseño de personajes</b> y entornos en <b>pixel art</b>.<br/><br/> 
          Realicé una especialización en <b>desarrollo de videojuegos</b> con Unity en Generation Colombia, una organización de alto impacto.  
          Disfruto aprender y aplicar nuevas técnicas en mis proyectos, algunos de los cuales puedes ver en la sección de <b>proyectos</b>.<br/><br/>

          Estoy abierta a colaborar en proyectos creativos donde pueda <b>contribuir</b> y seguir creciendo en el arte pixelado. 
          No dudes en contactarme.<br/><br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Conjunto de habilidades profesionales</h1>
      <div className='skills'>
        <Skills skill='Aseprite' />
        <Skills skill='Blender' />
        <Skills skill='Unity' />
        <Skills skill='C#' />
        <Skills skill='Java' />
        <Skills skill='Git' />
        <Skills skill='Postman' />
        <Skills skill='Python' />
        <Skills skill='Oracle' />
        <Skills skill='MySql' />
      </div>
    </>
  )
}

export default About
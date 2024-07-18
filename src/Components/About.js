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
          Hola, mi nombre es <b>Valentina Arias</b> y soy de Colombia, Bogotá.
          Soy una <b>desarrolladora de videojuegos</b> y modeladora de personajes 3d. <br/><br/>
          Realicé una especialización en <b>desarrollo de videojuegos con Unity</b> en Generation Colombia, una organización de alto impacto.
          Me encanta aprender cosas nuevas y aplicarlas en mis proyectos, puedes ver algunos de mis trabajos en la sección de proyectos.<br/><br/>
          Estoy <b>abierto</b> a nuevas colaboraciones o trabajos en los que pueda contribuir y crecer. No dudes en conectarte conmigo, los enlaces están en el pie de página.<br/>
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
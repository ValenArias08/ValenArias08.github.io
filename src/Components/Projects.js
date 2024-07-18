import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';

import EchoesofBillie1 from '../images/EchoesofBillie1.jpg';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>Mis <b>Proyectos</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={EchoesofBillie1} projectName="Echoes of Billie" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="News_letter" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" />
        <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
      </div>

    </div>
  )
}

export default Projects
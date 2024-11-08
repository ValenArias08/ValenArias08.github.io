import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";

const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    AncestralGuardiansTitle:"Ancestral Guardians",
    AncestralGuardiansRol:"Diseñadora de personajes pixel Art | Assets",
    AncestralGuardiansDesc:"Juega este increible juego 2D y adentrate un poco a la cultura precolombina ;)",
    AncestralGuardiansGithub:"https://github.com/Drande/ancestral-guardians",
    AncestralGuardiansWebSite:"https://germanmunoz.itch.io/ancestral-guardians",

    GuayaboEternoTitle:"Guayabo Eterno",
    GuayaboEternoRol:"Colaborador de Arte y Diseño | Asistente de Dirección Creativa",
    GuayaboEternoDesc:"Conoce a Max y sorprendete con está maravillosa historia",
    GuayaboEternoWebSite:"https://karolnwn.itch.io/guayabo-eterno",

    GalacticGrowTitle: "Galactic Grow",
    GalacticGrowRol:"Diseñadora Pixel art | Diseño de UI | Assets | FX",
    GalacticGrowDesc:"Vive la experiencia de controlar un marciano granjero que busca cuidar sus plantas mágicas de entes desconocidos que se quieren apoderar de ellas.",
    GalacticGrowGithub: "https://github.com/ValenArias08/Galactic-Grow",
    GalacticGrowWebsite:"https://valen-arias.itch.io/galactic-grow",

    EchoesofBillieTitle: "Echoes of Billie",
    EchoesofBillieRol:"Developer | Assets",
    EchoesofBillieDesc:"Sumergete en la misteriosa y fantástica historia de Billie. Perdido y sin recuerdos de cómo llegó a ese lugar, su única esperanza de respuestas es recolectar fragmentos de su memoria, mientras se enfrenta a sus peores pesadillas.",
    EchoesofBillieGithub:"https://github.com/Sebasm2028/Echoes_of_Billy",
    EchoesofBillieWebsite:"https://valen-arias.itch.io/echoes-of-billy",

    ExplosiveBallonTitle : "Explosive Ballon Race",
    ExplosiveBallonRol:"Developer",
    ExplosiveBallonDesc : "Juega este increíble prototipo y trata de superar tu record, pero ten cuidado... puedes explotar intentandolo.",
    ExplosiveBallonWebsite : "https://valen-arias.itch.io/explosive-balloon-race",

    GrabBallTitle : "Grab the ball Rex!",
    GrabBallRol:"Developer",
    GrabBallDesc : "¿Podrá Max coger la pelota o se le escapará de su hocico?, juega este increíble prototipo y descubrelo!.",
    GrabBallWebsite : "https://valen-arias.itch.io/challenge-2",

    LaserFoodTitle:"Laser Food",
    LaserFoodRol:"Developer",
    LaserFoodDesc:"¡Oh ho!, los animales escaparon del Zoologico, intenta detenerlos... con una sabrosa pizza!.",
    LaserFoodWebsite:"https://valen-arias.itch.io/laser-food",

    SlideCarTitle: "Slide Car",
    SlideCarRol:"Developer",
    SlideCarDesc:"¿Podrás conducir está camioneta y empujar obstaculos?..",
    SlideCarWebsite:"https://valen-arias.itch.io/slide-car"
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3> {desc[projectName + 'Title']}</h3>
            <br/>
            <h4>{desc[projectName + 'Rol']}</h4>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox
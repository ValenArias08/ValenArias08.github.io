import React from 'react'; 
import { TbBrandCSharp } from "react-icons/tb";
import {FaUnity, FaJava, FaPython, FaGitAlt} from "react-icons/fa";
import {SiBlender, SiOracle , SiMysql, SiPostman, SiAseprite} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        Blender:<SiBlender />,
        Postman: <SiPostman/>,
        'C#': <TbBrandCSharp/>,
        Unity: <FaUnity/>,
        Java: <FaJava/>,
        Git : <FaGitAlt/>,
        Python : <FaPython/>,
        Oracle : <SiOracle/>,
        MySql : <SiMysql/>,
        Aseprite: <SiAseprite />
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills

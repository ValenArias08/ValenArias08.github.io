import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import { FaItchIo } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <h4>Copyright &copy; 2024</h4>
      <div className='footerLinks'>
        <a href="https://github.com/ValenArias08" target='_blank'><FaGithub/></a>
        <a href='mailTo:valentina.ariasv20@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://valen-arias.itch.io/" target="_blank"><FaItchIo /></a>
      </div>
    </footer>
  )
}

export default Footer
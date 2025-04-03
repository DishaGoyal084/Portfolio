import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Disha Goyal</h4>
      <h4>Copyright &copy; 2024 DG</h4>
      <div className='footerLinks'>
        <a href="https://github.com/DishaGoyal084" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/disha-goyal-319903275/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:dishagoyal084@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/disha84/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer
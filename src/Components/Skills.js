import React from 'react'; 
import {FaReact, FaJava, FaGitAlt, FaGithub,  FaBootstrap} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Java: <FaJava />,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Bootstrap: <FaBootstrap/>
    }
    if(!icon[skill]) return skill;
    console.log("Rendering Skill:", skill);
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills

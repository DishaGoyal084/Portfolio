import React from 'react';
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    "Weather Wave": {
      Desc: "Weather Wave delivers real-time weather forecasts with interactive visualizations, assisting users with informed decision-making.",
      Github: "https://github.com/Divya16004/Weather-wave",
    },
    "Explore Era": {
      Desc: "Explore Era Travels is a dynamic travel blogging platform, enabling users to share their journeys with rich text and images.",
      Github: "https://github.com/Divya16004/Blogging_Project",
    }
  };

  if (!desc[projectName]) {
    return null; // Return nothing if projectName is not found
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt={`${projectName} display`} />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName].Desc}
        <br />

        {desc[projectName].Github && (
          <a href={desc[projectName].Github} target='_blank' rel="noopener noreferrer">
            <button className='projectbtn'><FaGithub /> Github</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;

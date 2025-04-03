import React from 'react';
import ProjectBox from './ProjectBox';
import ExploreEra from '../images/exploreeraimg.png';
import WeatherWave from '../images/weatherwaveimg.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WeatherWave} projectName="Weather Wave" />
        <ProjectBox projectPhoto={ExploreEra} projectName="Explore Era" />
      </div>

    </div>
  )
}

export default Projects
import React from 'react'
import particle from './config'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import '../../App.css'
const ParticleBackground=()=>{


  const particlesInit = async (main) => {
    

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
    return<>

        <Particles
        id='particles-js'
        init={particlesInit}
      loaded={particlesLoaded} 
      options={particle}></Particles>
        
    </>
}
export default ParticleBackground;
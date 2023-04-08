import { useState, useRef } from 'react'
import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import profImg from './images/prof.png'
import gitHubImage from './images/github.png'
import CV from './assets/cv.pdf'

function Project({name,description,link}){
  const projectCard = useRef()
  
  function handleClick(e){
    console.log(e.target.className)
    if(e.target.className==='back-card' ||e.target.className==='description'){
      projectCard.current.style.transform = 'rotateX(0deg)';

    }else{
      projectCard.current.style.transform = 'rotateX(180deg)';
    }
    
  }
  return(
    <div className='maincontainer'>
        <div className='project-card' onClick={handleClick} ref={projectCard}>

            <div className='front-card' onClick={handleClick}>
              <div className='title'>{name}</div>
            </div>

            <div className='back-card' onClick={handleClick}>
              <div className='description' onClick={handleClick}> {description}</div>
              
              <div className='git-link'><a href={link}><img src={gitHubImage}/>GitHub</a></div>
              
            </div>
        </div>
    </div>
  )
}



function App() {
  

  return (
    <div className='container'>
      
            
              <div className='header'>
                <div className='left-side'>
                  <div className='introduction'>Hello I'm Michal,</div>
                  <div className='further-introduction'>I am a Computer Science student. I'm really into programming and I love to learn new things. I actively seek out opportunities to expand my knowledge and improve my programming skills. I am eager to find a place where I can contribute to real projects and further enhance my skills through practical experience.</div>
                  <a href={CV} download><div className='download-cv'>DOWNLOAD CV</div></a>
                </div>
              </div>

              <div className='technologies'>
                Technologies:
                  <div>Javascript</div>
                  <div>HTML and CSS</div>
                  <div>REACT.js</div>
                  <div>NEXT.js</div>
                  <div>Firebase</div>
                  <div>GIT</div>
              </div>
              <div className='projects'>
                PROJECTS:
                <Project name={'Weather App'} description={"My first project in React.js. I've used Pexels and OpenWeather API to retrieve data needed to display weather and image associated with given city."} link={'https://github.com/Mttt7/weather-app-react'}> </Project>
              </div>
              

          
      
    </div>
  )
}

export default App

import { useState, useRef } from 'react'
import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import profImg from './images/prof.png'
import gitHubImage from './images/github.png'
import laptopImg from './images/laptop.gif'
import CV from './assets/cv.pdf'
import copyImg from './images/copy.png'

import angularImg from './images/angular.png'


import { Helmet } from 'react-helmet';

let projectId = 0
function Project({name,description,link,color,technology}){
  
const styles={
  //backgroundColor:color
}


  console.log(`url(./images/${technology}.png)`)
  let techClass
  let colorClass
  if(technology==='angular'){
    techClass = 'angular'
    
  }
  else if(technology==='react'){
    techClass='react'
    colorClass = 'black'
  }
  else if(technology==='js'){
    techClass='js'
  }
  
  
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
    <div className='maincontainer' >
        <div className='project-card prevent-select'  onClick={handleClick} ref={projectCard}>

            <div className={`front-card ${techClass}`}  onClick={handleClick}>
              <div className='title'>{name}</div>
            </div>

            <div className={`back-card ${techClass}`}   onClick={handleClick}>
              <div className={`description  ${colorClass}`} style={styles}  onClick={handleClick}> {description}</div>
              
              <div className='git-link'  ><a href={link}><img src={gitHubImage}/>GitHub</a></div>
              
            </div>
        </div>
    </div>
  )
}

function CopyEmail(){
  const email = "michalttomaszewski02@gmail.com"
  const handleCopyEmail = () => {
    
    navigator.clipboard.writeText(email);
  };

 
  return(
    <div className='copy-email'>
      <div className='mail-text'>michalttomaszewski02@gmail.com</div>
      <div className='copy-icon' ><a  onClick={handleCopyEmail}><img src={copyImg}/></a></div>
    </div>
    
  )
}

function Footer(){
  const link = 'https://github.com/Mttt7'
  return(
    <div className='footer'>
      
      <div className='link'><a href={link}><img src={gitHubImage}/>Michał Tomaszewski 2023</a></div>
      <div className="info">*The site may not work properly on iPhones</div>
    </div>
  )
}

function App() {
  

  return (
    <div className='container'>
      <video className="video-background" autoPlay muted loop>
        <source src="./video-background.mp4" type="video/mp4" />
        </video>
      <Helmet>
        <title>Michał Tomaszewski</title>
        <link rel="icon" href="/images/MT.svg"></link>
      </Helmet>
            
              <div className='header'>
                <div className='left-side'>
                  <div className='introduction dynamic-text'><span>Hello, I'm Michal</span></div>
                  <div className='further-introduction'>
                    <div className='text '>
                    I am a Computer Science student. I'm really into programming and I love to learn new things. I actively seek out opportunities to expand my knowledge and improve my programming skills. 
                    </div>
                   
                  </div>
                  <a href={CV} download className='sticky'><div className='download-cv'>DOWNLOAD CV</div></a>
                  <div className='further-introduction bigger-font '>I am eager to find a place where I can contribute to real projects and further enhance my skills through practical experience.</div>
                  
                </div>
                <img className='laptop-gif fade-in' src={laptopImg}/>
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
                <div className='projects-container'>
                {/* <Project technology='angular' color={'#ffffff00'} name={'Dev.to clone'} description={"."} link={''}> </Project> */}
                <Project technology='react' color={'#ffffff00'} name={'Dev.to clone'} description={"Dev.to clone created using Next.js and Firebase. You can log in using your google account. It uses SSR and ISR to ensure best user experience."} link={'https://github.com/Mttt7/devto-clone'}> </Project>
                <Project technology='react' color={'#ffffff00'} name={'Weather App'} description={"My first project in React.js. I've used Pexels and OpenWeather API to retrieve data needed to display weather and image associated with given city."} link={'https://github.com/Mttt7/weather-app-react'}> </Project>
                <Project technology='js' color={'##ffffff00'} name={'Sketchbook'} description={"Sketchbook app allows you to draw on a square grid. Vanilla JS."} link={'https://github.com/Mttt7/Etch-a-Sketch'}> </Project>
                <Project technology='js' color={'#ffffff00'} name={'To do list'} description={"To Do List allows users to create, manage, and organize their tasks. Users can add, edit, and delete tasks, set due dates, and mark completed tasks and assign them to Projects. Vanilla JS"} link={'https://github.com/Mttt7/todolist'}> </Project>
                <Project technology='js' color={'#ffffff00'} name={'Library'} description={"Simple Library app written in Vanilla JS."} link={'https://github.com/Mttt7/Library'}> </Project>
                
                </div>
               </div>
              
              <div className='contact'>
                <div className='text'> CONTACT:</div>
                <CopyEmail></CopyEmail>
              </div>

              <Footer></Footer>          
              
    </div>
  )
}

export default App

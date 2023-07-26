import React, { ReactElement } from 'react'

import { Link } from "react-scroll";

import profilePic from "../../starter-code/assets/images/sulaimon.jpg"
import github from "../../starter-code/assets/images/icon-github.svg"
import linkedin from "../../starter-code/assets/images/icon-linkedin.svg"
import twitter from   "../../starter-code/assets/images/icon-twitter.svg"
import frontendMentor from "../../starter-code/assets/images/icon-frontend-mentor.svg"
import Oval from "../../starter-code/assets/images/Group 26 Copy.png"
interface Props {
    
}

function Hero({}: Props): ReactElement {
    return (
        <div className='h-screen bg-black  relative'>
             <img className = "absolute top-[23%]" src = {Oval} alt = "oval"/>
            <div className='md:w-[80%] md:h-[100%] border-b-2 border-white md:grid md:grid-cols-2 md:gap-4 mx-auto '>
              <div className='md:text-left my-[100px]'>
                 <h1 className='md:text-[60px] text-white'>Nice to meet you! </h1>
                 <div className='mt-4 flex-col md:flex md:flex-row'>
                   <h1 className='md:text-[60px] text-white '>I'm  </h1> <h1 className='border-b-2 border-[#4EE1A0] md:text-[60px] text-white  md:border-[#4EE1A0] md:border-b-2 pb-0 md:ml-2'>Adeoye Sulaimon.</h1>
                 </div>
                
                 <p className='text-sm text-white'>
                    Based in the Lagos, I’m a front-end developer <br/> passionate about building accessible web apps <br/> that users love.
                 </p>
                 <div className='md:text-left mt-[10%]'>
                  <Link to= "contacts" spy={true} smooth={true} offset={-10} duration={500}>
                    <button 
                    className='text-white border-b-2 border-[#4EE1A0] md:pb-4 hover:opacity-50 hover:text-[#4EE1A0]'
                  
                    >Contact Me</button>
                  
                  </Link>
                    
                    
                 </div>
               </div>
               <div 
               className = "z-30 mx-auto h-[300px] md:mt-[-100px] md:h-[90%] md:w-full bg-center bg-cover relative" 
               style = {{ backgroundImage : `url(${profilePic})` }}
               >
                 
                   <div className='grid grid-cols-4 md:w-[30%] gap-4 right-2 absolute md:top-[5%]'>
                     <a href="https://www.github.com/adeoye99">
                       <img  src= {github}  alt = "githublogo"/>
                     </a>
                     <a href="https://www.linkedin.com/in/kolawole-adeoye-0761981b2" >
                        <img  src= {linkedin}  alt = "linkedinlogo"/>
                     </a>
                      <a>
                        <img  src= {frontendMentor}  alt = "linkedinlogo"/>
                      </a>
                     <a href="https://twitter.com/SulaimonAdeoye5" >
                       <img  src= {twitter}  alt = "twitterlogo"/>
                     </a>
                     
                  </div> 
               </div>
            </div>
        </div>
    )
}

export default Hero

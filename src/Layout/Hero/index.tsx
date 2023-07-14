import React, { ReactElement } from 'react'

import profilePic from "../../starter-code/assets/images/image-profile-desktop.webp"
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
            <div className='md:w-[80%] md:h-[100%] border-b-2 border-white md:grid md:grid-cols-2 mx-auto '>
              <div className='md:text-left my-[100px]'>
                 <h1 className='md:text-[60px] text-white'>Nice to meet you! </h1>
                 <div className='mt-4 flex-col md:flex md:flex-row'>
                   <h1 className='md:text-[60px] text-white '>I'm  </h1> <h1 className='border-b-2 border-[#4EE1A0] md:text-[60px] text-white  md:border-[#4EE1A0] md:border-b-2 pb-0 md:ml-2'>Adeoye Sulaimon.</h1>
                 </div>
                
                 <p className='text-sm text-white'>
                    Based in the Lagos, I’m a front-end developer <br/> passionate about building accessible web apps <br/> that users love.
                 </p>
                 <div className='md:text-left mt-[10%]'>
                    <button 
                    className='text-white border-b-2 border-[#4EE1A0] md:pb-4 hover:opacity-50 hover:text-[#4EE1A0]'
                   
                    >Contact Me</button>
                 </div>
               </div>
               <div className = "z-30 mx-auto h-[300px] md:mt-[-100px]  md:h-[800px] md:w-full bg-center bg-cover relative " style = {{ backgroundImage : `url(${profilePic})`}}>
                 
                   <div className='grid grid-cols-4 md:w-[30%] gap-4 right-2 absolute md:top-[5%]'>
                     <img  src= {github}  alt = "githublogo"/>
                     <img  src= {linkedin}  alt = "linkedinlogo"/>
                     <img  src= {frontendMentor}  alt = "linkedinlogo"/>
                     <img  src= {twitter}  alt = "twitterlogo"/>
                  </div> 
               </div>
            </div>
        </div>
    )
}

export default Hero

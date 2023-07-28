import React, { ReactElement } from 'react'
import github from "../../starter-code/assets/images/icon-github.svg"
import linkedin from "../../starter-code/assets/images/icon-linkedin.svg"
import twitter from   "../../starter-code/assets/images/icon-twitter.svg"
import frontendMentor from "../../starter-code/assets/images/icon-frontend-mentor.svg"
import Oval from "../../starter-code/assets/images/Group 26 Copy.png"


interface Props {
    
}

function Header({}: Props): ReactElement {
    return (
        <div className='bg-black h-[100px] relative flex items-center justify-center'>
            <div className=' md:grid md:grid-cols-2 w-[80%] mx-auto py-auto'>
               <div className='md:text-left'>
                   <p className='text-xl text-white'>ADEOYE SULAIMON KOLAWOLE</p>
               </div>
               <div className='relative z-40 hidden md:block'>
               <div className='grid grid-cols-4 md:w-[30%] gap-4 right-[30%] top-[10%] md:right-2 absolute md:top-[5%]'>
                     <a href="https://www.github.com/adeoye99">
                       <img  src= {github}  alt = "githublogo"/>
                     </a>
                     <a href="https://www.linkedin.com/in/kolawole-adeoye-0761981b2" >
                        <img  src= {linkedin}  alt = "linkedinlogo"/>
                     </a>
                      <a>
                        <img  src= {frontendMentor}  alt = "linkedinlogo" />
                      </a>
                     <a href = "https://twitter.com/SulaimonAdeoye5" >
                       <img  src  = {twitter}  alt = "twitterlogo"/>
                     </a>
                  </div> 
               
               </div>
              </div>
        </div>
    )
}

export default Header

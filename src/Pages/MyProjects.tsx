import React from 'react'
import Projectscase from '../Components/ProjectCase'
import { Link } from "react-scroll";

import { Projects } from '../Constants/Projects'

interface Props {
    
}

const MyProjects = (props: Props) => {
    return (
        <div data-aos="zoom-in-up" className='w-[90%] md:w-[60%] mx-auto pt-[100px] py-[10%] relative'>
            <div className='flex '>
               <h1 className='text-2xl md:text-5xl font-bold text-left text-white'>Projects</h1>
               <Link to= "contacts" spy={true} smooth={true} offset={-10} duration={500}>
                   <button className='text-white absolute right-0 border-b-2 border-[#4EE1A0] md:pb-4 hover:opacity-50 hover:text-[#4EE1A0]'>Contact Me</button>
               
               </Link>
              
            </div>
           <div className=' grid md:grid-cols-2 gap-8 mt-[80px]'>
            {
                Projects.map((item)=>{
                    return(

                        <Projectscase
                        key = {item.id}
                        img = {item.projectImage}
                        title = {item.title}
                        toolsUsed = {item.toolsUsed}
                        LinktoCode = {item.LinktoCode} 
                         LinktoViewProject = {item.LinktoProject}
                        />
                    )
                })
            }  
           </div>
            
            
        </div>
    )
}

export default MyProjects

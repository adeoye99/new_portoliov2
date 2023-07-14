import React from 'react'
import Projectscase from '../Components/ProjectCase'
import  DesignSolution  from "../starter-code/assets/images/thumbnail-project-1-large.webp"
import  Skilled2  from "../starter-code/assets/images/thumbnail-project-2-large.webp"
import { Projects } from '../Constants/Projects'
interface Props {
    
}

const MyProjects = (props: Props) => {
    return (
        <div className='w-[90%] md:w-[60%] mx-auto pt-[100px] py-[10%] relative'>
            <div className='flex '>
               <h1 className='text-2xl md:text-5xl font-bold text-left text-white'>Projects</h1>
               <button className='text-white absolute right-0 border-b-2 border-[#4EE1A0] md:pb-4 hover:opacity-50 hover:text-[#4EE1A0]'>Contact Me</button>
            </div>
           <div className=' grid md:grid-cols-2 gap-8 mt-[80px]'>
            {
                Projects.map((item)=>{
                    return(

                        <Projectscase
                        img = {item.projectImage}
                        title = {item.title}
                        toolsUsed = {item.toolsUsed}
                        />
                    )
                })
            }  
           </div>
            
            
        </div>
    )
}

export default MyProjects

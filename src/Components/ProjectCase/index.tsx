import React from 'react'

interface ProjectsProps {
    img : string,
    title : string,
    toolsUsed: string,
    
    
}

const Projectscase = ({ img , title, toolsUsed}: ProjectsProps) => {
    return (
        <div className='w-[100%] text-left  relative hover:opacity-50'>
            {/* <div className='h-[350px] w-[100%] pt-8 bg-center bg-cover ' style = {{ backgroundImage : `url(${img})`}}  >
                 <button className= 'absolute hidden border-b-2 border-[#4EE1A0] mx-auto md:pb-4 hover:opacity-50 hover:block' >View Project</button>
                 <button className= "bg-blue-500 text-white py-2 px-4 flex mx-auto" >Button</button>
            </div> */}
            <a className="relative block  bg-gray-900 w-full h-[350px] group"
                    href="##">
                    <img 
                      className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50"
                      src={img}
                      />
                    <div className="relative p-5">
                        <div className="mt-20 ">
                            {/* Hidden content */}
                            <div 
                            className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0"
                                
                            >
                                <div className="p-2 mx-auto justify-center w-[40%] grid grid-cols-1 hidden md:block">
                                    <div>
                                      <button className= 'border-b-2 border-[#4EE1A0] text-white mx-auto md:pb-4 hover:text-[#4EE1A0]' >View Project</button>
                                    </div>
                                    <div>
                                       <button className= 'border-b-2 border-[#4EE1A0] text-white mx-auto md:pb-4 hover:text-[#4EE1A0]' >View Code</button>
                                    </div>
                                </div>
                            </div>
                            {/* End of hidden content */}
                        </div>
                    </div>
                </a>
                <p className='text-white text-2xl'>{title}</p>
               <p className='text-[#D9D9D9] text-sm'>{toolsUsed}</p>
               <div className="p-2 flex relative gap-y-4 block md:hidden">
                        <button className= 'absolute left-0 border-b-2 border-[#4EE1A0] text-white mx-auto md:pb-4 hover:text-[#4EE1A0]' >View Project</button>
                        <button className= 'absolute right-0 border-b-2 border-[#4EE1A0] text-white mx-auto md:pb-4 hover:text-[#4EE1A0]' >View Code</button>
                </div>
        </div>
    )
}

export default  Projectscase

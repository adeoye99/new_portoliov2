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
        <div className='bg-black h-[100px] relative flex items-center justify-center z-0'>
            <div className='z-90 md:grid md:grid-cols-2 w-[80%] mx-auto py-auto'>
               <div className='text-left'>
                   <p className='text-xl text-white'>ADEOYE SULAIMON KOLAWOLE</p>
               </div>
               <div className='relative z-40'>
               
               </div>
              </div>
        </div>
    )
}

export default Header
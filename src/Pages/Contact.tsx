import React, { ReactElement , useState } from 'react'
import Input from '../Components/Input'
import Oval from "../starter-code/assets/images/Group 26 Copy.png"
import github from "../starter-code/assets/images/icon-github.svg"
import linkedin from "../starter-code/assets/images/icon-linkedin.svg"
import twitter from   "../starter-code/assets/images/icon-twitter.svg"
import frontendMentor from "../starter-code/assets/images/icon-frontend-mentor.svg"
import Textfeild from '../Components/Textfeild'

interface Props {
    
}

function Contact({}: Props): ReactElement {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [comment , setComment] =useState("")
    return (
        <div id = "contacts" className='bg-[#242424] h-[700px] text-white md:py-[10px] relative'>
              <img className = "absolute top-[43%]" src = {Oval} alt = "oval"/>
            <div className='grid grid-cols-1 w-[80%] mx-auto md:grid-cols-2 pt-[100px]'>
                <div>
                    <div className=' text-left'>
                       <h1 className='text-5xl font-4xl font-bold'>Contact</h1>
                       <p className='mt-[50px] h-[100px]'>I would love to hear about your project and how I <br/> could help. Please fill in the form, and I’ll get back<br/> to you as soon as possible.</p> 
                    </div>
                 </div>
                 <div >
                    <div className='flex flex-col gap-y-[30px]'>
                     <Input
                       type = "text"
                       value = {name}
                       placeholder="Name"
                       onChange = {(e)=>{setName(e.target.value)}}
                     
                       />
                      <Input
                       type='text'
                       value = {email}
                       placeholder="Email"
                       onChange = {(e)=>{setEmail(e.target.value)}}
                       />
                     <Textfeild
                        value = {comment}
                        placeholder="Comment"
                        onChange = {(e)=>{setComment(e.target.value)}}
                     
                     />



                   <div className='w-[100%] relative'>
                      <button className='text-white  border-b-2 border-[#4EE1A0] mt-2 absolute right-0  md:pb-4 hover:opacity-50 hover:text-[#4EE1A0]'>Contact Me</button>
                    </div>
                    </div>
                 </div> 
            </div>
            <div className='absolute inset-x-0 bottom-0  flex justify-center'>
               <div className='grid grid-cols-2 w-[80%] pt-[10%] md:pt-[30px] md:pb-[60px] border-t-2 border-white'>
                <div className='text-left'> 
                     <p>ADEOYE SULAIMON KOLAWOLE</p>
                </div>
                <div className='relative'>
                <div className='grid grid-cols-4 md:w-[20%] gap-4 absolute right-3'>
                     <img  src= {github}  alt = "githublogo"/>
                     <img  src= {linkedin}  alt = "linkedinlogo"/>
                     <img  src= {frontendMentor}  alt = "linkedinlogo"/>
                     <img  src= {twitter}  alt = "twitterlogo"/>
                  </div>
                     
                </div>


               </div>
             </div>
        </div>
    )
}

export default Contact

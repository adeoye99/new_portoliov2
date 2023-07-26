import React, { ReactElement , ChangeEvent, useState ,useRef } from 'react'
import Input from '../Components/Input'
import Oval from "../starter-code/assets/images/Group 26 Copy.png"
import github from "../starter-code/assets/images/icon-github.svg"
import linkedin from "../starter-code/assets/images/icon-linkedin.svg"
import twitter from   "../starter-code/assets/images/icon-twitter.svg"
import frontendMentor from "../starter-code/assets/images/icon-frontend-mentor.svg"
import Textfeild from '../Components/Textfeild'
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import { PulseLoader } from 'react-spinners'
import Swal from 'sweetalert2'


interface Props {
    
}
 
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID 
// const PUBLIC_KEY = "user_ucKqH4Th84EjAe6ju4zvX"
const USER_ID = process.env.REACT_APP_USER_ID
emailjs.init(`${USER_ID}`);

function Contact({}: Props): ReactElement {
   const form = useRef(null);
    const [name , setName] = useState("")
    const [message , setMessage] = useState("")
    const [email , setEmail] = useState("")
   const [isSending , setIsSending] = useState(false)
   //  const [name , setName] = useState("")
const SendEmail = ( event: React.FormEvent<HTMLFormElement>  )  =>{
   const templateParams = {
      to_name: name,
      from_name: email,
      message: message,
    };
    setIsSending(true)
   event?.preventDefault()      
  emailjs.send( `${SERVICE_ID}` ,`${TEMPLATE_ID}` , templateParams)
   .then((result) => {
      console.log(result.text);
      
      Swal.fire({
         title: 'Message Sent',
         text: result?.text,
         icon: 'success',
         confirmButtonText: 'Ok'
       })
      setIsSending(false)
      setEmail("")
      setMessage("")
      setName("")
  }, (error) => {
   Swal.fire({
      title: 'Error',
      text: error.text,
      icon: 'error',
      confirmButtonText: 'try again'
    })
      console.log(error.text);
      setIsSending(false)
  })

}

const handleNameChange = (e : ChangeEvent<HTMLInputElement>) => {
   setName(e.target.value)
}
const handleEmailChange = (e : ChangeEvent<HTMLInputElement>) => {
   setEmail(e.target.value)
}
const handleMessageChange = (e : ChangeEvent<HTMLTextAreaElement>) => {
   setMessage(e.target.value)
}

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
                    <form 
                     ref={form}
                     onSubmit = {SendEmail}
                    >
                    <div className='flex flex-col gap-y-[30px]'>
                     <Input
                       type = "text"
                       name = "name"
                       placeholder="NAME"
                       value={name}
                       onChange = {handleNameChange}
                     
                       />
                      <Input
                       type='email'
                       name = "email"
                       placeholder="EMAIL"
                       value = {email}
                       onChange = {handleEmailChange}
                       />
                     <Textfeild
                        name ="message"
                        placeholder = "MESSAGE"
                        value={message}
                        onChange = {handleMessageChange}
                     />
                        <div className='w-[100%] relative'>
                          <button 
                          className='text-white  border-b-2 border-[#4EE1A0] mt-2 absolute right-0  md:pb-4 hover:opacity-50 hover:text-[#4EE1A0]'
                           type = "submit"
                           >
                              {
                                 isSending ? 

                                 <PulseLoader color = "#36d7b7"/>  
                                 :
                                 "SEND MESSAGE"

                              }
               
                           </button>
                        </div>
                     </div>
                    </form>
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

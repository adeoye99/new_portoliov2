import React, { ReactElement , ChangeEvent } from 'react'

interface Props {
   
    placeholder?: string;
    name : string;
    value : string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;

    
}

function Textfeild({placeholder , name , value , onChange }: Props): ReactElement {
    return (
        <div className='w-[100%] '>
            <textarea
              value = {value}
              name = {name}
              placeholder = {placeholder}
              onChange = {onChange}
              className=' bg-[#242424] pl-6 pb-3 border-b-2 border-white w-[100%] h-[100px]  hover:border-[#4EE1A0] focus:border-[#4EE1A0]  outline-none'
            />
            
        </div>
    )
}

export default Textfeild

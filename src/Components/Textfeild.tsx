import React, { ReactElement } from 'react'

interface Props {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    
}

function Textfeild({placeholder , onChange , value }: Props): ReactElement {
    return (
        <div className='w-[100%] '>
            <textarea
              placeholder = {placeholder}
              onChange = {onChange}
              value = {value}
              className=' bg-[#242424] pl-6 pb-3 border-b-2 border-white w-[100%] h-[100px]  hover:border-[#4EE1A0] focus:text-[#4EE1A0] overfloe-hidden outline-none'
            />
            
        </div>
    )
}

export default Textfeild

import React, { ReactElement } from 'react'

interface Props {
        type : string;
        value: string;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        placeholder?: string;
}

function Input({placeholder, type , onChange ,value}: Props): ReactElement {
    return (
        <div className='w-[100%] h-10'>
            <input
              type = {type}
              className= " bg-[#242424] border-b-2 border-white w-[100%] pl-6 pb-3 outline-none hover:text-[#4EE1A0] hover:border-[#4EE1A0] focus:text-[#4EE1A0]"
              value = {value}
              onChange={onChange}
              placeholder={placeholder}
             
            />
        </div>
    )
}

export default Input

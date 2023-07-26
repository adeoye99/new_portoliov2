import React, { ReactElement ,ChangeEvent } from 'react'

interface Props {
        type : string;
        value : string,
        placeholder?: string;
        name : string;
        onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Input({placeholder, type , name , value , onChange }: Props): ReactElement {
    return (
        <div className='w-[100%] h-10'>
            <input
              name = {name}
              type = {type}
              className= " bg-[#242424] border-b-2 border-white w-[100%] pl-6 pb-3 outline-none  hover:border-[#4EE1A0] focus:border-[#4EE1A0]"
              placeholder={placeholder}
              value = {value}
              onChange={onChange}
            />
        </div>
    )
}

export default Input

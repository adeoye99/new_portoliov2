import React, { ReactElement } from 'react'

interface Props {
    name : string,
    numberofExperience: string,
    
}


function Skill({ name , numberofExperience }:Props): ReactElement {
    return (
        <div className='w-[10%] md:w-[40%] text-left'>
            <h1 className='text-lg md:text-2xl'>{name}</h1>
            <p className='flex flex-row text-md md:text-xl '>{numberofExperience}</p>
            
        </div>
    )
}

export default Skill

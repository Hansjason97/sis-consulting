import React from 'react'

function Folder(props) {
  return (
    <div className='p-[1px] rounded-md bg-gradient-to-b from-primary to-secondary w-fit text-center'>
        <div className='px-8 max-w-sm pt-12 pb-8 bg-[#0B0914] flex flex-col gap-6 rounded-md h-full'>
            <h4>
                {props.title}
            </h4>
            <p className='text-sm'>
                {props.description}
            </p>
            <button className='w-full'>
                En savoir plus
            </button>
        </div>
    </div>
  )
}

export default Folder
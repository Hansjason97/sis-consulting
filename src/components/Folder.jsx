import React from 'react'

function Folder(props) {
    
  return (
    <div className='p-[1px] rounded-md bg-gradient-to-b from-secondaryLight to-secondary  text-center
    cursor-pointer relative top-0 hover:top-[-5px] transition-all duration-150 ease-in group'>
        <div className='px-8 pt-12 pb-8 bg-[#0B0914] flex flex-col gap-6 rounded-md h-full 
        bg-blend-multiply hover:bg-blend-soft-light'
        style={{backgroundImage: `url(${props.image})`}}>
            <h4 className='group-hover:text-primary'>
                {props.title}
            </h4>
            <p className='text-sm'>
                {props.description}
            </p>
        </div>
    </div>
  )
}

export default Folder
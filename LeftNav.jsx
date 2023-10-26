import React from 'react'

const LeftNav = () => {
  return (
    <div className=' border-red-600 border-4 h-full w-full'>
      <ul className='flex-col flex'>
        <li className='text-center text-red-400 font-serif text-[25px] hover: cursor-pointer my-2 hover:scale-125 transition-all hover:text-green-400 underline decoration-green-500 hover:decoration-red-500' onClick={()=>openMenu()}>
          Home
        </li>
        <li className='text-center text-red-400 font-serif text-[25px] hover: cursor-pointer my-2 hover:scale-125 transition-all hover:text-green-400 underline decoration-green-500 hover:decoration-red-500' onClick={()=>openMenu()}>
          Settings
        </li>
        <li className='text-center text-red-400 font-serif text-[25px] hover: cursor-pointer my-2 hover:scale-125 transition-all hover:text-green-400 underline decoration-green-500 hover:decoration-red-500' onClick={()=>openMenu()}>
          Docs
        </li>
        <li className='text-center text-red-400 font-serif text-[25px] hover: cursor-pointer my-2 hover:scale-125 transition-all hover:text-green-400 underline decoration-green-500 hover:decoration-red-500' onClick={()=>openMenu()}>
          Support
        </li>
        <li className='text-center text-red-400 font-serif text-[25px] hover: cursor-pointer my-2 hover:scale-125 transition-all hover:text-green-400 underline decoration-green-500 hover:decoration-red-500' onClick={()=>openMenu()}>
          Analysis
        </li>
        
      </ul>
    </div>
  )
}

export default LeftNav
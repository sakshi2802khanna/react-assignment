import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (<>
  <div className='border-4 h-auto w-full fixed bg-yellow-50 z-10'>
  <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="../src/watches/logo.jpg" className='object-cover h-[70px] hover:scale-150 transition-all'/>
      <span className="ml-3 text-xl">Watchi Co.</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-5">
    <FontAwesomeIcon icon={faUser} size="2x" className=''/>
    </button>
    <button className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
    <FontAwesomeIcon icon={faArrowRightFromBracket} size="2x"/>
    </button>
  </div>
</header>
  </div>
  </>)
}

export default Header
import React from 'react'
import Header from './Header'
import LeftNav from './LeftNav'
import ProductPage from './ProductPage'
const Home = () => {
  return (<>
  <Header/>
  <div className='flex pt-[100px]'>
    <div className='fixed left-0 h-[90%] w-[15%] border-2'>
      <LeftNav/>
    </div>
    <div className='absolute right-0 w-[85%] border-2'>
      <ProductPage/>
    </div>
  </div>
  </>)
}

export default Home
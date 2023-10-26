import { faStar } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { products } from './Data/eccom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../src/open.css"
const ProductPage = () => {
  const [page, setPage]=useState(1)
  let totalPages=products.length/8
  totalPages=Math.ceil(totalPages)
  const getPrev =()=>{
    if(page<2){
      setPage(totalPages)
    }
    else{setPage(page-1)}
  }
  const getNext =()=>{
    if(page>=totalPages){
      setPage(1)
    }
    else{setPage(page+1)}
  }
  
    const ArrOf5 = Array(5).fill(null)
    console.log(products);
    return (
      <>
      <div className='flex justify-around w-[400px] h-auto m-3 border-2'>
        <button className='border-2 bg-gray-500 text-green-600 text-[20px] font-semibold px-4 py-1 rounded-3xl' onClick={()=>getPrev()}>Prev</button>
        <p>
          {page} of {totalPages}
        </p>
        <button className='border-2 bg-gray-500 text-green-600 text-[20px] font-semibold px-4 py-1 rounded-3xl' onClick={()=>getNext()}>Next</button>
      </div>
     
        <div className='p-5 border-2 border-indigo-50 grid grid-cols-4 justify-around'>
          
          {products.slice((page*8)-8,page*8).map((v) => {
                return (
                  <div key={v.id} className='w-[300px] h-[250px] border-4 my-2 border-indigo-500 rounded-2xl text-center group relative' onClick={()=>handelProduct(v.id)}>
                    <div className='text-red-700'>{v.type}</div>
                  <img src={v.image.url} className='mx-auto h-[80%] mix-blend-multiply rounded-full self-center object-fit' />
                  <div className='example hidden group-hover:block transition-all bg-white bg-opacity-75 font-light absolute bottom-0 w-[300px] h-[80px] overflow-scroll'>
                    <p>{v.review}</p>
                  </div>
                  <div className='flex justify-around'>
                  <div className=' flex px-5 border-red-'>{ArrOf5.map((w, i) => {
                      if (i + 1 <= v.rating) {
                          return (
                              <div>
                                  <span className='text-yellow-500 '><FontAwesomeIcon icon={faStar} /></span>
                              </div>
                          )
                      }
                      else {
                          return (
                              <div>
                                  <span className='text-white'><FontAwesomeIcon icon={faStar} /></span>
                              </div>
                          )
                      }
                  })}</div>
                  <div className='w-[25%] bg-yellow-200 me-2 rounded-lg hover:bg-yellow-500 transition-all'>{v.price}</div>
                  </div>
                  
              </div>
                  
                )
              })}
            
        </div> </>
    )
}

export default ProductPage
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SearchFilters from './search-filters'

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0   z-10 ">
      <div className='max-w-[1500px] mx-auto py-6 px-4'>
        <div className='flex justify-between items-center'>
          <Link href={"/"} >
          <Image src={"/logo.png"}  width={180} height={38}/>
          </Link>
          <SearchFilters/>
          <div className='flex items-center space-x-6'>
            add Propery
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'

const SearchFilters = () => {
  return (
    <div className="h-[50px] flex flex-row justify-between border rounded-full">
      <div className="flex flex-row items-center">
        <div className="w-[250px] h-[50px] px-8 flex items-center rounded-full hover:bg-gray-100">
          <p className='text-xx font-semibold '>Where</p>
          <p className='text-sm'>Wanted location</p>
        </div>
      </div>
    </div>
  )
}

export default SearchFilters

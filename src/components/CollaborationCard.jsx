import React from 'react'

const CollaborationCard = ({collaboration}) => {
  return (
    <div>
        
        <div className='flex justify-between border-b-2 py-3 items-center'>
            <p className='max-w-[700px]'>{collaboration.title} - {collaboration.currency}{collaboration.amount} </p>

            <p className='bg-[#ffe2dc] text-[#F08E1F] text-sm py-1 px-2 rounded-md'>Single Promotion</p>
                <input type='checkbox' class="appearance-none rounded-sm w-3 h-3 bg-transparent
             focus:ring-0 focus:ring-offset-0 checked:bg-[#F08E1F] checked:border-[#F08E1F] border border-gray-600"  />
            </div>
    </div>
  )
}

export default CollaborationCard
import React,{useState} from 'react'


const CollaborationCard = ({collaboration, onSelect}) => {
  // const [isSelected, setIsSelected] = useState(false)

  const numberFormatter = new Intl.NumberFormat('en-US');

  const handleToggle = (e) => {

    onSelect(collaboration.id, e.target.checked, {
      id: collaboration.id,
      title: collaboration.title,
      amount: collaboration.amount,
      currency: collaboration.currency,
    })
  }
  return (
    <div>
        
        <div className='flex justify-between border-b-2 py-3 items-center'>
            <p className='max-w-[700px]'>{collaboration.title} - {collaboration.currency} {numberFormatter.format(collaboration.amount)} </p>

            <p className='bg-[#ffe2dc] text-[#F08E1F] text-sm py-1 px-2 rounded-md'>Single Promotion</p>
                <input type='checkbox'
                // checked={isSelected}
                onChange={handleToggle}
                 class="appearance-none rounded-sm w-3 h-3 bg-transparent
             focus:ring-0 focus:ring-offset-0 checked:bg-[#F08E1F] checked:border-[#F08E1F] border border-gray-600"  />
            </div>
    </div>
  )
}

export default CollaborationCard
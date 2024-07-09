import React from 'react'
import Sidebar from '../components/Sidebar'

import InnerPurchaseHistory from '../components/InnerPurchaseHistory'

const PurchaseHistory = () => {
  return (
    <div className='flex justify-between'>

    <Sidebar/>
    
<InnerPurchaseHistory/>
       
        </div>
  )
}

export default PurchaseHistory
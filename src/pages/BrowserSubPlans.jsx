import React from 'react'
import Sidebar from '../components/Sidebar'

import SubscriptionPlans from '../components/SubscriptionPlans'

const BrowserSubPlans = () => {
  return (
    <div className='flex justify-between'>

    <Sidebar/>
    
<SubscriptionPlans/>
       
        </div>
  )
}

export default BrowserSubPlans
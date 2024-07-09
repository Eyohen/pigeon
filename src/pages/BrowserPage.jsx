import React from 'react'
import Sidebar from '../components/Sidebar'

import InnerBrowsePage from '../components/InnerBrowsePage'

const BrowserPage = () => {
  return (
    <div className='flex justify-between'>

    <Sidebar/>
    
<InnerBrowsePage/>
       
        </div>
  )
}

export default BrowserPage
import React from 'react'
import AIChatHeader from './_components/AIChatHeader'
import Chatinterface from './_components/Chatinterface'

const page = () => {
  return (
    <div className='min-h-screen'>
        <AIChatHeader/>
        <Chatinterface/>
    </div>
  )
}

export default page
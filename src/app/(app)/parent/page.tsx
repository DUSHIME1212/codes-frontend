import React from 'react'
import BannerParents from './_components/BannerParents'
import MainContent from './_components/MainContent'

const page = () => {
  return (
    <div className='min-h-screen'>
        <BannerParents/>
        <MainContent/>
    </div>
  )
}

export default page
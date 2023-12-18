import React from 'react'

import { Navbar } from '@/components/navbar/page'
const page = () => {
  return (
    <section>
      <Navbar />
      <div className='text-black'>
        <h1>NewsX</h1>
      </div>
      <div>
        <p>Welcome to NewsX Website</p>
      </div>
    </section>

  )
}

export default page
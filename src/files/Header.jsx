import React from 'react'
import bgcar from '../assets/black car.avif'

const Header = () => {
  return (
    <div>
        <img className=' w-screen h-screen fixed -z-10 '  src={bgcar} alt="bgcar" />
        {/* <video className='w-screen h-screen fixed -z-10 autofill:*: ' src="src/assets/carvideo.mp4"></video> */}
    </div>
  )
}

export default Header
import React from 'react'
import loading from '../image/Spinner.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={loading} alt="Loading" style={{width:'8vw'}}/>
    </div>
  )
}
export default Spinner
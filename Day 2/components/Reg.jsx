import React from 'react'

const Reg = () => {
  return (
    <div>
      <h1 className='text-5xl font-bold text-blue-500 '>WELCOME TO REGISTRATION PAGE</h1><br />
      <input type="text" placeholder='NAME' className='border p-2 rounded' />
      <br /><br />
      <input type="text" placeholder='PLACE' className='border p-2 rounded ' /><br /><br />
      <input type="number" placeholder='AGE' className='border p-2 rounded' /><br /><br />
      <input type="password" placeholder='PASSWORD' className='border p-2 rounded'/><br /><br />
      <button className='bg-green-500 text-white rounded px-5 py-1'>submit</button>
    </div>
  )
}

export default Reg

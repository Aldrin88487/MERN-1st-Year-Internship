import React from 'react'

const Navibar = () => {
  return (
    <div>
      <nav className='bg-blue-500 text-white p-3 flex justify-between'>
        <h1 className='font-bold text-black text-xl'>My Navigation !</h1>
        <div className='flex gap-6'>
            <a href="/" className='hover:bg-yellow-500 p-2'>Login</a>
            <a href="/t"className='hover:bg-yellow-500 p-2'>Reg</a>
            <a href="/r"className='hover:bg-yellow-500 p-2'>Table</a>
            <a href="/c"className='hover:bg-yellow-500 p-2'>Card</a>
            <a href="/s"className='hover:bg-yellow-500 p-2'>Statebasis</a>
        </div>
      </nav>
    </div>
  )
}

export default Navibar

import React from 'react'

const Login = () => {
  return (
    <div>
      {/* <h1>WELCOME TO LOGIN PAGE</h1>
      <input type="text" placeholder='username'/>
      <br />
      <input type="password" placeholder='password'/>
      <br />
      <br />
      <button>submit</button>
      <br />
      <br /> */}
      <h1 className='text-2xl font-bold mb-6'>WELCOME TO LOGIN PAGE</h1>
      <input type="text" placeholder='username' className='border p-2'/>
      <br /><br />
      <input type="password" placeholder='password' className='border p-2'/>
      <br />
      <br />
      <button className=' bg-blue-500 px-4 py-1 text-white rounded'>submit</button>
    </div>
  )
}

export default Login

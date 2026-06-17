import React from 'react'

const Tabledata = () => {
  return (
    <div className='px-6'>
        <table className='w-full mt-6'>
            <thead>
                <tr className='bg-blue-100 text-purple-500'>
                    <th className='p-2'>Name</th>
                    <th className='p-2'>Place</th>
                    <th className='p-2'>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className='border hover:bg-yellow-500'>Adith</th>
                    <th className='border hover:bg-yellow-500'>KOTYM</th>
                    <th className='border hover:bg-yellow-500'>19</th>
                </tr>
            </tbody>
        </table>
      
    </div>
  )
}

export default Tabledata

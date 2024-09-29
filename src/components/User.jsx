import React from 'react'

const User = ({name,role,email,index}) => {
  return (
    <div>
        <div className='text-xl  text-slate-900 font-semibold'>
          <h1>{index + 1}</h1>
          <p> 
            Name: {name}
          </p>
          <p> 
            Role: {role}
          </p>
          <p> 
            Email: {email}
          </p>
        </div>
        
    </div>
  )
}

export default User
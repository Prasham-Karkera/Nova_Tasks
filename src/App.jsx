import { useState } from 'react'
import './App.css'
import User from './components/user'

function App() {
  const [formData, setFormData] = useState([{
    name : '',
    role : '',
    email : ''
  }]);

  const [userData, setUserData] = useState([]);

  //handling of form data 
  function changeHandler(data){
    const name = data.target.name;
    const value = data.target.value;
    //making an object of the formData and adding current values and setting the new state (use of spread operator)
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name] : value
    }));
  }

  //updating the user data after every submit click
  function submitHandler(data){
    data.preventDefault();
    const newUserData = userData.concat([formData]);
    setUserData(newUserData);
  }

  return (
    <>

    <div className=' bg-slate-500 min-h-screen'>
    <h1 className='flex justify-center text-3xl p-4 text-slate-800 font-serif'>Nova Web Task 1</h1>

    <div className='flex justify-evenly '>
        <div className='bg-cyan-700 mt-[100px] mb-[100px] border border-black p-10'>
            <form onSubmit={submitHandler} className='flex flex-col gap-4 justify-end'>
              <div>
                <label htmlFor="name">Name : </label> 
                <input type="text" name = "name" value={formData.name} className='bg-slate-300 rounded-md mx-3' onChange={changeHandler}/>
              </div>
              <div>
                <label htmlFor="role" className=''>Role : </label> 
                <input type="text" name= "role" value={formData.role} className='bg-slate-300 rounded-md mx-5' onChange={changeHandler}/>
              </div>
              <div>
                <label htmlFor="email">Email : </label> 
                <input type="text" name="email" value={formData.email} className='bg-slate-300 rounded-md mx-3' onChange={changeHandler}/>
              </div>
              
              <button className='bg-blue-600 rounded-md w-[120px] p-2 text-white mx-16 mt-2'> Save Data</button>
            </form>
          </div>

          <div className='mt-[80px]'>
            <h1 className='text-4xl font-semibold text-teal-900 font-mono'>Users</h1>
            {userData.length > 0 ? (
            <div className="mt-4">
              {
                userData.map((user, indexPosition) => (
                  <div key={indexPosition} className="mb-4 p-2 border-b border-black">
                    <User name={user.name} role={user.role} email={user.email} index={indexPosition}></User>
                  </div>
                ))
              }
            </div>
          ) : (
            <p className="mt-4 text-gray-500">No user data submitted yet.</p>
          )}
          </div>
    </div>
    </div>
      
      
    </>
  )
}

export default App

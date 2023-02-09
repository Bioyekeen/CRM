import React from 'react'
import {Link} from 'react-router-dom'
import axios from "axios"

function Login() {

  const handleSubmit = async(e) =>{
    e.preventDefault()
    
    const form = new FormData(e.currentTarget)
    await axios.post("http://localhost:5000/login", form)
    .then((res) => {
      if(res?.data?.message === "credentials not found"){
        alert(res?.data?.message)
      }else if(res?.data?.message === "login successfully"){
        alert(res?.data?.message)
      }
    })
  }
  return (
    <div className='login m-auto'>
      <form onSubmit={(e) =>  handleSubmit(e)}>
        <div>
            <label htmlFor="" className="form-label "> Email</label>
            <input type="email" name='email' className='form-control'/>
        </div>

        <div>
            <label htmlFor="" className="form-label "> Password</label>
            <input type="password" name='pwd' className='form-control'/>
        </div>
        <button type='submit' className='btn my-3 btn-md btm-primary'>Login</button>
        </form>


        <p className='lead'>New user? <Link to="/signup" className=''>Signup</Link></p>
    </div>
    
  )
}

export default Login

import React, { useState } from 'react'
import {Link} from 'react-router-dom'



function Login()  {
    const [fname, setFname] = useState ("")
const [lname, setLname] = useState ("")
const  [email, setEmail] = useState ("")
const [pwd, setPwd] = useState ("")
const [photo, setPhoto] = useState ("")

const handleClick = () =>{
    console.log(fname)
    console.log(lname)
    console.log(email)
    console.log(pwd)
    console.log(photo)
}
    return (
        <div className='login m-auto'>
            <h2>Registration Form</h2>
            <form >

                <div>
                    <label htmlFor="" className="form-label "> First Name</label>
                    <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} name="fname" placeholder="First Name" required className='form-control' />
                </div>

                <div>
                    <label htmlFor="" className="form-label "> Last Name</label>
                    <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} name="lname" placeholder="Last Name" required className='form-control' />
                </div>

                <div>
                    <label htmlFor="" className="form-label "> Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" required className='form-control' />
                </div>

                <div>
                    <label htmlFor="" className="form-label "> Password</label>
                    <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} name="pwd" placeholder="Password" required className='form-control' />
                </div>


                <div>
                    <label htmlFor="" className="form-label "> photo</label>
                    <input type="file" onChange={(e) => setPhoto(e.target.files)} name="email" required className='form-control' />
                </div>



                <button type='button' onClick={handleClick} className='btn my-3 btn-md btm-success'>Submit</button>
            </form>
        </div>

    )
}

export default Login


another way

import React from 'react'
import {Link} from 'react-router-dom'



function Login()  {
    
    const handleSubmit = (e) =>{
            e.preventDefault()
            const form = new FormData(e.currentTarget)
            console.log(form.get("fname"))
            console.log(form.get("lname"))
            console.log(form.get("email"))
            console.log(form.get("pwd"))
            console.log(form.get("photo"))
}
    return (
        <div className='login m-auto'>
            <h2>Registration Form</h2>
            <form  onSubmit={(e) => handleSubmit(e)}>

                <div>
                    <label htmlFor="" className="form-label "> First Name</label>
                    <input type="text" name="fname" placeholder="First Name" required className='form-control' />
                </div>

                <div>
                    <label htmlFor="" className="form-label "> Last Name</label>
                    <input type="text"  name="lname" placeholder="Last Name" required className='form-control' />
                </div>

                <div>
                    <label htmlFor="" className="form-label "> Email</label>
                    <input type="email"  name="email" placeholder="Email" required className='form-control' />
                </div>

                <div>
                    <label htmlFor="" className="form-label "> Password</label>
                    <input type="password" name="pwd" placeholder="Password" required className='form-control' />
                </div>


                <div>
                    <label htmlFor="" className="form-label "> photo</label>
                    <input type="file" name="photo" required className='form-control' />
                </div>



                <button type='submit' className='btn my-3 btn-md btm-success'>Submit</button>
            </form>
        </div>

    )
}
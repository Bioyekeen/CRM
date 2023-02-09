import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios"



function Signup()  {

    const navigate = useNavigate()
     
    const handleSubmit = async(e) =>{
            e.preventDefault()
            const form = new FormData(e.currentTarget)
            await axios.post("http://localhost:5000/signup", form)
            .then((res) => {
                if(res?.data?.message === "input field cannot be empty"){
                    alert(res?.data?.message)
                }else if(res?.data?.message === "Upload Your Photo"){
                    alert(res?.data?.message)
                }else if(res?.data?.message === "success"){
                    alert(res?.data?.message)
                    navigate("/")
                }
            })
            .catch((err) => console.log(err))
}
    return (
        <div className='login m-auto'>
            <h2>Registration Form</h2>
            <form  onSubmit={(e) => handleSubmit(e)}>

                <div>
                    <label htmlFor="" className="form-label "> First Name</label>
                    <input type="text" name="fname" placeholder="First Name" className='form-control' />
                </div>

                <div>
                    <label htmlFor="" className="form-label "> Last Name</label>
                    <input type="text"  name="lname" placeholder="Last Name" className='form-control' />
                </div>

                <div>
                    <label htmlFor="" className="form-label "> Email</label>
                    <input type="email"  name="email" placeholder="Email" className='form-control' />
                </div>

                <div>
                    <label htmlFor="" className="form-label "> Password</label>
                    <input type="password" name="pwd" placeholder="Password" className='form-control' />
                </div>


                <div>
                    <label htmlFor="" className="form-label "> photo</label>
                    <input type="file" name="photo"  className='form-control' />
                </div>



                <button type='submit' className='btn my-3 btn-md btm-success'>Submit</button>
            </form>
        </div>

    )
}

export default Signup

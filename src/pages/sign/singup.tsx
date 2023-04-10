import React from 'react'
import { useForm } from "react-hook-form"
import { signIn, signup } from '../../api/auth';
import { useNavigate, useParams } from 'react-router-dom'

type Props = {}

const singup = (props: Props) => {
                const navigate = useNavigate()
        const {
                register,
                handleSubmit,
                formState: { errors },
                
            } = useForm();
            
            const onHandleSubmit = async (data: any) => {
                const { data: user } = await signup(data);
                console.log("user", user);
                localStorage.setItem("user", JSON.stringify(user));
                
            }
            const handClick= () =>{
                navigate('/signin')
            }
         
            
  return (
  
     <div className='conatiner-login'>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
            <div className="mb-3" >
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='name'{...register('name')}/>
  </div>
  <div className="mb-3" >
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'{...register('email')}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'{...register('password')}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">confirmPassword</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='confirmPassword'{...register('confirmPassword')}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handClick} >signup</button>
</form>
    </div>
  )
}

export default singup
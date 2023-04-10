import React from 'react'
import { useForm } from "react-hook-form"
import { signIn } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
type Props = {}

const signin = (props: Props) => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        
    } = useForm();
    
    const onHandleSubmit = async (data: any) => {
        const { data: user } = await signIn(data);
        console.log("user", user);
        localStorage.setItem("user", JSON.stringify(user));
       
    }
    
    return (
        <div className='conatiner-login'>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
  <div className="mb-3" >
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'{...register('email')}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'{...register('password')}/>
  </div>
  <button type="submit" className="btn btn-primary">login</button>
</form>
            {/* <form onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="email" placeholder='Email'{...register('email')} />
                <input type="password" placeholder='Password'{...register('password')} />
                <button>Login</button>

            </form> */}

        </div>
    )
}

export default signin
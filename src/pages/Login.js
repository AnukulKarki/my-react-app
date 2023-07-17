import '../pagescss/Login.css';
import {TextInput} from './textinput';

export const Login = () =>{
    return(
        <>
            <div className='screen'>
                <div className='companyName'>
                    <p className='companytitle'>Company Name</p>
                </div>
                <div className='login-plate'>
                    
                        <p className='loginTitle'>Login</p>
                    
                    <br/>
                    <div className='input-field'>
                        <p className='labelField'>Email</p>
                        <TextInput/>
                        

                        <p className='labelField'>Password</p>
                        <input type='text' className='text-Field' placeholder='Password'/>
                        <p className='forget-password'>Forget Password</p>
                        

                        <button type='submit' className='submitButton'>Submit</button>

                        <br/>
                        <br/>
                        <div className='register-redirect'>
                              <p className='account'>Does not have an account? <span className='join'>Join For Free</span></p>                          
                        </div>
                        <br/>
                        <br/>
                    </div>
                    

                </div>
            </div>



        </>
    );
}
import '../pagescss/Login.css';

export const Signup = () =>{
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
                        <input type='text' className='text-Field' placeholder='Email' />
                        

                        <p className='labelField'>Password</p>
                        <input type='text' className='text-Field' placeholder='Password'/>
                        

                        <button type='submit' className='submitButton'>Register</button>

                        <br/>
                        <br/>
                        <div className='register-redirect'>
                              <p className='account'>Already have an account? <span className='join'>Login here</span></p>                          
                        </div>
                        <br/>
                        <br/>
                    </div>
                    

                </div>
            </div>



        </>
    );
}
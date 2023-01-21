import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import './SignIn.css';

export default function SignIn() {
  const userRef=useRef()
  const errRef=useRef()

  const[user, setUser]=useState('');
  const[pwd, setPwd]=useState('');
  const[errMsg, setErrMsg]=useState('');
  const[success, setSuccess]=useState(false);

  useEffect(()=>{
    useRef.current.focus();
  },[])

  useEffect(()=>{
    setErrMsg('');
  },[user,pwd])

const handleSubmit=async(e)=>{
  e.preventDefault();
  console.log(user,pwd);
  setUser('');
  setPwd('');
  setSuccess(true);
}


  return (
    <>{success?(
      <section>
        <h1>You are Logged In!</h1>
        <br/>
        <p>Lets' Go Home!</p>
      </section>):(
    <div className='SignIn'>
      <div className='SignIn-Content'>
        <h1> Sign In </h1>
        <br/> <br/>
        <section>
          <form onSubmit={handleSubmit}>
            <p ref={errRef} className={errMsg?"errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>
            <label for = "email"> Email: </label>
            <input type = "email" id = "email" name = "email" placeholder = "Email" ref={userRef} onChange={(e)=>setUser(e.target.value)} value={user} required/>
            <br/> <br/>

            <label for = "password"> Password: </label>
            <input type = "password" id = "password" name = "password" placeholder = "Password"  onChange={(e)=>setPwd(e.target.value)} value={pwd} required/>
            <br/> <br/>

            <input type = "checkbox" id = "rememberMe" name = "rememberMe"/>
            <label for = "rememberMe"> Remember Me </label>

            <Link to = "/">
              {/* This button should check if the required data has inputted */}
              <button type = "submit" className = "logInButton" id = "logInButton"> Log In </button>
            </Link>
          </form>
            <br/> <br/>

            <Link to = "/accounts/password/reset"> Forgot Password? </Link>
            <br/> <br/>

            <label for = "SigningUp"> Don't have an account </label>
            <Link to = "/accounts/signup"> Sign Up Here</Link>
      </section>
      </div>
    </div> )}
    </>
  );
}

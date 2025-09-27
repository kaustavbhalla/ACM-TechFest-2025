import React, { useState } from 'react'
import Section from './section';
import Button from './Button';
import { auth, provider, signInWithPopup, } from "../firebaseConfig";
import { saveUser } from "C:/Users/kaust/USICT/acmChallenge/utils/saveUser.js";

const Login = ({ className }) => {

  const [load, setload] = useState(false);

  const handleLogin = async () => {
    setload(true);
    try {
      const result = await signInWithPopup(auth, provider);
      await saveUser(result.user);
    } catch (err) {
      console.error('Login error:', err);
    } finally{
      setload(false);
    }
  };

  return (
    <Section className='pt-[12rem] -mt-[5.25rem]'>
      <div className='container relative z-2'>
        <div className='flex flex-col items-center justify-center min-h-[60vh] text-center'>
          <div className='max-w-[30rem] mx-auto'>
            <h2 className={`h2 mb-6 text-n-1 ${className || ""}`}>
              Login Required
            </h2>
            <p className='body-1 mb-8 text-n-3 lg:mb-12'>
              Please sign in with your Google account to access BrainWave events and register for competitions.
            </p>
            <Button 
              className='w-full sm:w-auto px-8 py-4' 
              onClick={handleLogin}
              disabled={load}
            >
              Login with Google
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Login
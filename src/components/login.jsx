import React from 'react'
import { BackgroundCircles, BottomLine, Gradient } from './design/Hero';
import Section from './section';
import Header from './header';
import Button from './button';
import { auth, provider, signInWithPopup, signOut } from "../firebaseConfig";

const Login = ({ className, inputHeader, inputText}) => {

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <Section>
      <Header />
        <div className='container lg:flex'>
            <div className='max-w-[25rem]'>
                <h2 className={`h2 mb-4 md:mb-8 ${className || ""}`}>Login Required.</h2>
              </div>
              <p className='body-2 mt-[6rem] -ml-[8.35rem] text-n-4 justify-items-start'>Click below to login with Google</p>
</div>
              <Button className='mt-[10rem] items-center justify-center' onClick={handleLogin}>Login with Google</Button>
        
    </Section>
  )
}

export default Login
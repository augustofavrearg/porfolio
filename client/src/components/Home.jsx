import React from 'react';
import Input from './ui/Input';
import Label from './ui/Label';
import Button from './ui/Button';
import Title from './ui/Title';
import Subtitle from './ui/Subtitle';
import ToggleSwitch from './ui/ToogleSwitch';
import { useState } from 'react';
import PostForm from './ui/PostForm';




const Home = () => {

  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = (value) => {
    setIsEnabled(value);
  };




  return (
    <div>
      <div>
          <PostForm/>
      </div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        
        <div >
          <Title text="Título principal"  />
          <Subtitle text = "Este es el subtitel"/>
          <ToggleSwitch defaultChecked={isEnabled} onChange={handleToggle} />
          <p>El interruptor está {isEnabled ? 'activado' : 'desactivado'}</p>

        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
            <Label htmlFor="email">Email address</Label>
            
              <div className="mt-2">
                <Input placeholder="Enter your email" type="email" name="email" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Input placeholder="Enter your password" type="password" name="password" />
              </div>
            </div>

            <div>
              <Button type="submit">Sign in</Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

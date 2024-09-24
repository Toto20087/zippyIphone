import React from 'react';
import ButtonGrande from '../components/ButtonGrande';
import ButtonP from '../components/ButtonPropio';
import IconoExit from '../components/IconoExit';
import HomeIcon from '../components/HomeIcon';

const Login = () => {
  return (
    <div className="flex h-screen">
      {/* Left side - Image */}
      <div className='w-1/3 flex items-center justify-center bg-[url("/bg_login.png")] bg-no-repeat bg-center bg-cover rounded-xl '>
      </div>
      
      

      {/* Right side - Login options */}
      <div className="w-2/3 bg-[#0198FF] flex flex-col items-center justify-center">
        <div className='absolute top-10 right-10 z-50'>
          <HomeIcon />
        </div>
        <h2 className="text-white text-3xl mb-8">Soy:</h2>
        <div className="space-y-4 space-x-6">
            
          <button className="rounded-full w-48 transition duration-300">
            <ButtonGrande
                url="/logInProfesor"
                text="Profesor/a"
                />
          </button>
          <button className="rounded-full w-48 transition duration-300">
            <ButtonGrande
                url="/logInAlumno"
                text="Alumno/a"
                />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
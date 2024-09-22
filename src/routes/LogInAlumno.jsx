import React, { useState } from 'react';
import ButtonP from '../components/ButtonPropio';

const LoginAlumno = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el inicio de sesión
    console.log('Iniciar sesión con:', email, password);
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Image */}
      <div className='w-1/3 flex items-center justify-center bg-[url("/bg_login.png")] bg-no-repeat bg-center bg-cover rounded-xl '>
      </div>
      
      {/* Right side - Login form */}
      <div className="w-2/3 bg-[#0198FF] flex flex-col items-center justify-center p-12">
        <h2 className="text-7xl font-bold text-white mb-8">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2 font-semibold">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-full bg-transparent border border-white text-white placeholder-white"
              placeholder="Ingrese su email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-white mb-2 font-semibold">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-full bg-transparent border border-white text-white placeholder-white"
              placeholder="Ingrese su contraseña"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full font-bold"
          >
            <ButtonGrande
            url="/homeAlumno"
            text="Ingresa"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAlumno;
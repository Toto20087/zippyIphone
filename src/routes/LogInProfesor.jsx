import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/components/supabase/conection';

const LoginProfesor = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Intentar iniciar sesión con Supabase
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Verificar si el usuario existe en la autenticación de Supabase
      const { data: { user }, error: userError } = await supabase.auth.getUser();

      if (userError) throw userError;

      // Verificar si el profesor existe en la tabla 'teachers'
      const { data: teacherData, error: teacherError } = await supabase
        .from('teachers')
        .select('*')
        .eq('email', email)

      if (teacherError) throw teacherError;

      // Si el usuario es un profesor, redirigir
      if (teacherData) {
        console.log('Profesor autenticado:', teacherData);
        navigate('/homeProfesor');
      } else {
        alert('No se encontró un profesor asociado a este usuario.');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  const exit = () => {
    navigate('/login');
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Image */}
      <div className='w-1/3 flex items-center justify-center bg-[url("/bg_login.png")] bg-no-repeat bg-center bg-cover rounded-xl'></div>
      
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
          <div className='flex'>
            <button type="submit" className="w-1/2 font-bold">
              <p className='flex text-center items-center justify-center bg-[#33FFD1] cursor-pointer rounded-3xl pt-3 pb-3 pr-16 pl-16 text-lg mr-2 text-[#0099FF] transition-colors duration-200 hover:bg-[#BDFF00] font-semibold'>
                Ingresa
              </p>
            </button>
            <p onClick={exit} className='w-1/2 flex text-center items-center justify-center cursor-pointer rounded-3xl pt-3 pb-3 pr-16 pl-16 text-lg mr-2 text-[#FFFFFF] transition-all duration-200 hover:border hover:border-white font-regular'>
              Regresar
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginProfesor;

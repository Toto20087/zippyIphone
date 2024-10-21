import React, { useEffect, useState } from 'react';
import { supabase } from '@/components/supabase/conection';
import NavbarLogeado from "../components/NavbarLogeado";
import HeroProfesor from "../components/HeroProfesor";

const HomeProfesor = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (user) {
        const username = user.email.split('@')[0];
        setEmail(username); // Guarda el email del usuario
      } else {
        console.error('No hay usuario autenticado:', error);
        // Redirigir a login si no hay usuario
      }
    };

    fetchUser();
  }, []);

  return (
    <main className="h-screen bg-[#F5F5F5]">
      <NavbarLogeado
        text="Cursos"
        name={email} // Pasa el email al Navbar
      />
      <HeroProfesor />
    </main>
  );
};

export default HomeProfesor;

import React, { useState } from 'react';
import ButtonGrande from './ButtonGrande';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending data:', formData);
    // Here you would typically handle the form submission, like sending data to a server
  };

  return (
    <div className='bg-[#0099FF] p-5 flex items-center justify-center flex-col pb-20 pt-10 '>
      <h2 className='text-3xl md:text-6xl font-bold text-center text-[#33FFD1] tracking-tighter pb-5'>¿QUERES CONOCERNOS?</h2>
      <p className='text-white text-xl md:text-2xl tracking-wider   '>Contáctanos para ver una demo de nuestra plataforma:</p>
      <form onSubmit={handleSubmit} className='flex items-center justify-center flex-col w-1/4 mt-10'>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Apellido:</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Teléfono:</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <button type="submit" className='bg-[#33FFD1] cursor-pointer rounded-3xl pt-3 pb-3 pr-16 pl-16 text-lg mr-2 mt-5 text-[#0099FF] transition-colors duration-200 hover:bg-[#BDFF00] '>Enviar</button>
      </form>
    </div>
  );
};

const styles = {
    formContainer: {
      backgroundColor: '#34ace0',
      padding: '20px',
      maxWidth: '400px',
      margin: '0 auto',
      borderRadius: '8px',
    },
    formTitle: {
      color: '#fff',
      textAlign: 'center'
    },
    formSubtitle: {
      color: '#fff',
      textAlign: 'center'
    },
    inputGroup: {
      marginBottom: '10px',
      width: "100%"
    },
    label: {
      color: '#fff',
      display: 'block',
      fontSize: '18px'
    },
    input: {
      width: '100%',
      height: "auto",
      padding: '2px',
      background: 'none',
      border: 'none',
      borderBottom: '2px solid #33FFD1',
      color: '#fff',
      fontSize: '16px',
      outline: 'none'
    },
  };

export default ContactForm;

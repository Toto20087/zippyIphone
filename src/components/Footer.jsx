import React from 'react'
import { FaLinkedin,FaInstagramSquare,FaFacebookSquare } from "react-icons/fa"
import { IoMdMail } from "react-icons/io";  

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5 bg-[#015EFF] ">
      <div className="w-full flex items-start justify-between">
        <div>
          <svg width="180" height="80" viewBox="0 0 947 298" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.947266 233.437V191.703L125.806 91.9588L2.00993 92.6615V56.5841H175.322V98.3228L50.4633 198.068L177.802 197.364V233.437H0.947266Z" fill='#FFFFFF'/>
              <path d="M200.793 56.5841H242.881V233.444H200.793V56.5841Z" fill='#FFFFFF'/>
              <path d="M373.041 202.312C410.891 202.312 432.823 180.74 432.823 145.011C432.823 109.287 410.536 87.7135 373.041 87.7135C336.26 87.7135 313.62 111.412 313.62 145.011C313.62 178.615 336.26 202.312 373.041 202.312ZM272.588 297.109V56.5841H311.5L313.973 81.6975H317.156C330.599 64.0162 353.588 51.6361 383.656 51.6361C436.713 51.6361 475.973 89.8335 475.973 145.011C475.973 200.193 436.713 238.391 383.656 238.391C353.588 238.391 330.953 226.011 317.864 208.328H314.683V297.109H272.588Z" fill='#FFFFFF'/>
              <path d="M600.125 202.312C637.973 202.312 659.901 180.74 659.901 145.011C659.901 109.287 637.62 87.7135 600.125 87.7135C563.339 87.7135 540.702 111.412 540.702 145.011C540.702 178.615 563.339 202.312 600.125 202.312ZM499.672 297.109V56.5841H538.584L541.057 81.6975H544.24C557.682 64.0162 580.672 51.6361 610.74 51.6361C663.792 51.6361 703.057 89.8335 703.057 145.011C703.057 200.193 663.792 238.391 610.74 238.391C580.672 238.391 558.036 226.011 544.948 208.328H541.765V297.109H499.672Z" fill='#FFFFFF'/>
              <path d="M868.949 56.5841L809.881 198.421H805.637L745.506 56.5841H698.465L778.918 230.729H809.115V261.136H726.407V297.109H779.813C802.099 297.109 809.173 291.803 818.017 271.995L915.641 56.5841H868.949Z" fill='#FFFFFF'/>
              <path d="M915.922 26.0161H946.334V56.4228H915.922V26.0161Z" fill='#FFFFFF'/>
              <path d="M200.918 0.0574951H243.194V30.4641H200.918V0.0574951Z" fill="#FFFFFF"/>
          </svg>
          <p className="font-semibold text-white text-xl w-2/3">
            Donde tecnología y educación se encuentran para transformar el futuro
          </p>
        </div>

        <div className='flex items-start justify-center flex-col gap-y-4'>
          <p className='text-xl underline'>
            Mapa del sitio
          </p>
          <div className='flex items-start justify-center flex-col gap-y-2'>
            <a href="/" className='hover:text-white/80 transition-all'>Inicio</a>
            <a href="" className='hover:text-white/80 transition-all'>Hacemos que enseñar tecnología sea simple</a>
            <a href="" className='hover:text-white/80 transition-all'>Ejes temáticos</a>
            <a href="" className='hover:text-white/80 transition-all'>Contacto</a>
          </div>
        </div>

        <div className="flex flex-col md:items-center justify-between gap-y-5 mr-8">
          <p className="font-semibold text-white text-xl underline">Encontranos en:</p>
          <div className="flex items-center justify-center gap-x-7">
              <FaLinkedin size={30} className="cursor-pointer hover:text-white/80 transition-all" />
              <FaInstagramSquare size={30} className="cursor-pointer hover:text-white/80 transition-all" />
              <FaFacebookSquare size={30} className="cursor-pointer hover:text-white/80 transition-all" />
              <IoMdMail size={30} className="cursor-pointer hover:text-white/80 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
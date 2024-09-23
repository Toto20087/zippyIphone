// src/components/VideoSection.jsx
import React from 'react';
import { FaDownload } from 'react-icons/fa'; // Para el icono de descarga

const VideoSection = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mx-auto h-screen flex items-center justify-center flex-col w-full">
      {/* Sección del Video */}
      <div className="w-2/4">
        <video
          className="w-full h-auto rounded-xl"
          controls
          src="https://www.w3schools.com/html/mov_bbb.mp4" // Puedes cambiar el enlace del video
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Descripción debajo del video */}
      <div className="w-2/4 mt-4 flex items-start  justify-between">
        <div className='flex items-start justify-center flex-col'>
            <h3 className="text-2xl font-semibold text-black">Aclaraciones del profesor</h3>
            <p className="text-gray-600 mt-2 w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
        <div className="mt-4 flex items-center justify-center">
            <FaDownload className="text-gray-600 mr-2" />
            <a
            href="#"
            className="text-gray-600 font-medium hover:underline w-56 text-end"
            download
            >
            Descargar material adjunto
            </a>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

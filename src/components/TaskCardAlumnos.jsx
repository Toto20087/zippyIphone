// src/components/TaskCard.jsx
import React from 'react';
import ButtonGrande from './ButtonGrande';
import ButtonP from './ButtonPropio';

const TaskCardAlumnos = ({ title, status }) => {
  let bgColor, statusIcon, statusText;

  switch (status) {
    case 'completado':
      bgColor = 'bg-[#015EFF] '; // Azul para completado
      statusIcon = '✅';
      statusText = 'Completado';
      break;
    case 'pendiente':
      bgColor = 'bg-[#0099FF] '; // Celeste para pendiente
      statusIcon = '🌙';
      statusText = 'Pendiente';
      break;
    default:
      bgColor = 'bg-gray-400';
      statusIcon = '';
      statusText = '';
  }

  return (
    <div className={`${bgColor} flex justify-between items-center text-white rounded-xl p-4 my-3 cursor-pointer`}>
      <div className="flex items-center">
        <span className="mr-2 text-lg">{statusIcon}</span>
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm">{statusText}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCardAlumnos;

import React from 'react';

const ProgressCard = ({ curso, completadas, total }) => {
  const porcentaje = Math.round((completadas / total) * 100);

  return (
    <div className="bg-blue text-white rounded-xl p-4 flex items-center space-x-4 w-[670px] h-[120px] cursor-pointer ">
      {/* Icono del curso */}
      <div className="bg-green-200 p-2 rounded-full">
        {/* Aquí puedes reemplazar este div por un ícono o imagen */}
        <span role="img" aria-label="icon" className="text-lg">📘</span>
      </div>

      {/* Información del curso y barra de progreso */}
      <div className="flex-1">
        <div className="text-lg font-semibold">{curso}</div>
        
        {/* Barra de progreso */}
        <div className="w-full bg-blue-300 rounded-full h-4 mt-2">
          <div
            className="bg-teal-400 h-4 rounded-full"
            style={{ width: `${porcentaje}%` }}
          ></div>
        </div>
      </div>

      {/* Porcentaje completado */}
      <div className="text-lg font-semibold">
        {porcentaje}%
      </div>
    </div>
  );
};

export default ProgressCard;

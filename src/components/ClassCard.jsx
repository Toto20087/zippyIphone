import React from 'react';
import ButtonP from './ButtonPropio';

const ClassCard = ({curso}) => {
  return (
    <div className="w-[472px] h-80 rounded-xl overflow-hidden shadow-lg">
      <div className="relative">
        <img
          className="w-full object-cover h-80"
          src="/bg-card-class.png"
          alt="Classroom"
        />
        <div className="absolute inset-x-0 bottom-0 bg-purple-600 text-white p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold">{curso}</h2>
            </div>
            <ButtonP
            text="Ver modulos"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;

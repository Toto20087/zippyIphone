// src/components/TaskCard.jsx
import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { DatePickerWithPresets } from './DatePicker';
import { format } from 'date-fns';

const TaskCard = ({ title, status, onClick }) => {
  let bgColor, statusIcon, statusText;
  const [s, setS] = useState(status);
  const [selectedDate, setSelectedDate] = useState(null); // Estado para la fecha seleccionada

  status = s;

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
    case 'no iniciada':
      bgColor = 'bg-[#FF7E1D] '; // Naranja para no iniciada
      statusIcon = '❌';
      statusText = 'No iniciada';
      break;
    default:
      bgColor = 'bg-gray-400';
      statusIcon = '';
      statusText = '';
  }

  const handleComplete = () => {
    setS('completado'); // Cambia el estatus a "completado"
  };

  const handlePendient = () => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, "PPP");
      localStorage.setItem('selectedDate', formattedDate); // Guarda la fecha en localStorage
      console.log('Fecha seleccionada guardada:', formattedDate); // Muestra la fecha en consola
    }
    setS("pendiente");
  }

  return (
    <div className={`${bgColor} flex justify-between items-center text-white rounded-xl p-4 my-3 cursor-pointer`}>
      <div className="flex items-center w-3/4" onClick={onClick}>
        <span className="mr-2 text-lg">{statusIcon}</span>
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm">{statusText}</p>
        </div>
      </div>
      {status === 'pendiente' && (
        <>
          <AlertDialog>
            <AlertDialogTrigger>
              <p className='flex text-center items-center justify-center bg-[#33FFD1] cursor-pointer rounded-3xl pt-1.5 pb-1.5 pr-8 pl-8 text-lg mr-2 text-[#0099FF] transition-colors duration-200 hover:bg-[#BDFF00] font-semibold'>
                Completado
              </p>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Estas totalmente seguro?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta acción no se puede deshacer. Esto completara permanentemente la clase
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={handleComplete}>Continuar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )}
      {status === 'no iniciada' && (
        <span className="text-xl mr-2 cursor-pointer flex items-center gap-x-3"> 
          <DatePickerWithPresets onDateSelect={(date) => setSelectedDate(date)} />
          <AlertDialog>
            <AlertDialogTrigger>
              <p className='flex text-center items-center justify-center bg-[#33FFD1] cursor-pointer rounded-3xl pt-1.5 pb-1.5 pr-8 pl-8 text-lg text-nowrap mr-2 text-[#0099FF] transition-colors duration-200 hover:bg-[#BDFF00] font-semibold w-full'>
                Asignar Dia
              </p>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Estas totalmente seguro?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta acción no se puede deshacer. Esto completara permanentemente la clase
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={handlePendient}>Continuar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </span>
      )}
    </div>
  );
};

export default TaskCard;

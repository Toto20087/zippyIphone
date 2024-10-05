"use client"

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
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const TaskCard = ({ title, status, onClick }) => {

  const [date, setDate] = React.useState(null);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateSelect(newDate); // Pasa la fecha hacia el componente TaskCard
  };
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
    case 'programado': // Cambiado de "pendiente" a "programado"
      bgColor = 'bg-[#0099FF] '; // Celeste para programado
      statusIcon = '🌙';
      statusText = 'Programado';
      break;
    case 'pendiente': // Cambiado de "no iniciada" a "pendiente"
      bgColor = 'bg-[#FF7E1D] '; // Naranja para pendiente
      statusIcon = '❌';
      statusText = 'Pendiente';
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
    setS("programado"); // Cambia a "programado" en vez de "pendiente"
  }

  const handleDateChange2 = (date) => {
    setSelectedDate(date);
    const formattedDate = format(date, "PPP");
    localStorage.setItem('selectedDate', formattedDate);  
    console.log('Fecha actualizada:', formattedDate);
  };

  return (
    <div className={`${bgColor} flex justify-between items-center text-white rounded-xl p-4 my-3 cursor-pointer`}>
      <div className="flex items-center w-3/4" onClick={onClick}>
        <span className="mr-2 text-lg">{statusIcon}</span>
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm">{statusText}</p>
        </div>
      </div>
      {status === 'programado' && ( // Cambiado de "pendiente" a "programado"
        <div className='flex items-center justify-center gap-x-7'>
          {selectedDate && (
            <>
              <p className="text-base text-white cursor-default">Fecha: </p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className={cn(
                      "w-[180px] justify-end text-left font-normal text-white",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : <span>Elegir Fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                  <Select
                    onValueChange={(value) =>
                      handleDateChange(addDays(new Date(), parseInt(value)))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="0">Hoy</SelectItem>
                      <SelectItem value="1">Mañana</SelectItem>
                      <SelectItem value="3">En 3 Dias</SelectItem>
                      <SelectItem value="7">En una semana</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="rounded-md border">
                    <Calendar mode="single" selected={date} onSelect={handleDateChange2} />
                  </div>
                </PopoverContent>
              </Popover>
            </>
          )}
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
        </div>
      )}
      {status === 'pendiente' && ( // Cambiado de "no iniciada" a "pendiente"
        <span className="text-xl mr-2 cursor-pointer flex items-center justify-end gap-x-3"> 
          <DatePickerWithPresets onDateSelect={(date) => setSelectedDate(date)} />
            {selectedDate ? (
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
                      Esta acción no se puede deshacer. Esto le pondra una fecha a la clase
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={handlePendient}>Continuar</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              ): (
                <p className='flex w-1/3 text-center items-center justify-center bg-[#33FFD1] rounded-3xl pt-1.5 pb-1.5 pr-8 pl-8 text-lg text-nowrap mr-2 text-[#0099FF] transition-colors duration-200 font-semibold cursor-not-allowed'>
                  Asignar Dia
                </p>
              ) }
          
        </span>
      )}
    </div>
  );
};

export default TaskCard;

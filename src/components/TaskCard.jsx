"use client";

import React, { useState, useEffect } from 'react';
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
} from "@/components/ui/alert-dialog";

import { DatePickerWithPresets } from './DatePicker';
import { addDays, format, isValid } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { supabase } from './supabase/conection';

const TaskCard = ({ title, status, onClick, lessonId }) => {
  const [date, setDate] = useState(null);
  const [s, setS] = useState(status);
  const [displayDate, setDisplayDate] = useState(null);

  useEffect(() => {
    const fetchAssignedDate = async () => {
      if (s === "programado") {
        const { data, error } = await supabase
          .from("lessons")
          .select("fecha")
          .eq("id", lessonId)
          .single();

        if (error) {
          console.error("Error al obtener la fecha asignada:", error.message);
        } else if (data?.fecha) {
          const fetchedDate = data.fecha;
          setDisplayDate(fetchedDate);
        }
      }
    };

    fetchAssignedDate();
  }, [lessonId, s]);

  const updateLessonDate = async (lessonId, newDate) => {
    if (!(newDate instanceof Date) || isNaN(newDate)) {
      console.error("Fecha no válida:", newDate);
      return;
    }

    const utcDate = new Date(newDate.getTime() - newDate.getTimezoneOffset() * 60000);
    const formattedDate = format(utcDate, "yyyy-MM-dd");

    const { data, error } = await supabase
      .from('lessons')
      .update({ fecha: newDate, status: false })
      .eq('id', lessonId);

    if (error) {
      console.error("Error actualizando la fecha:", error.message);
    } else {
      console.log("Fecha actualizada correctamente:", formattedDate);
      setDisplayDate(utcDate); // Guarda la fecha como objeto Date
    }
  };

  const handleComplete = async () => {
    try {
      // Actualiza el estado en la base de datos
      const { data, error } = await supabase
        .from('lessons')
        .update({ status: true }) // Cambia a TRUE
        .eq('id', lessonId); // Asegúrate de que esto sea el ID correcto
  
      if (error) {
        console.error("Error actualizando el estado:", error.message);
      } else {
        console.log("Estado actualizado correctamente:", data);
        setS('completado'); // Cambia el estado en el componente
      }
    } catch (err) {
      console.error("Error al completar la tarea:", err);
    }
  };
  

  const handlePendient = async () => {
    if (displayDate) {
      await updateLessonDate(lessonId, displayDate);
      setS("programado");
    }
  };

  const handleDateChange2 = async (newDate) => {
    if (isValid(newDate)) {
      setDisplayDate(newDate); // Guarda la fecha seleccionada
      await updateLessonDate(lessonId, newDate); // Actualiza la fecha en la base de datos
      console.log('Fecha actualizada:', format(newDate, "yyyy-MM-dd"));
    } else {
      console.error('La fecha seleccionada no es válida:', newDate);
    }
  };

  const handleSelectChange = (value) => {
    const selectedDate = addDays(new Date(), parseInt(value));
    setDate(selectedDate);
    setDisplayDate(selectedDate);
  };

  let bgColor, statusIcon, statusText;

  switch (s) {
    case 'completado':
      bgColor = 'bg-[#015EFF] ';
      statusIcon = '✅';
      statusText = 'Completado';
      break;
    case 'programado':
      bgColor = 'bg-[#0099FF] ';
      statusIcon = '🌙';
      statusText = 'Programado';
      break;
    case 'pendiente':
      bgColor = 'bg-[#FF7E1D] ';
      statusIcon = '❌';
      statusText = 'Pendiente';
      break;
    default:
      bgColor = 'bg-gray-400';
      statusIcon = '';
      statusText = '';
  }

  return (
    <div className={`${bgColor} flex justify-between items-center text-white rounded-xl p-4 my-3 cursor-pointer`}>
      <div className="flex items-center w-2/4" onClick={onClick}>
        <span className="mr-2 text-lg">{statusIcon}</span>
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm">{statusText}</p>
        </div>
      </div>
      {s === 'programado' && (
        <div className='flex items-center justify-center gap-x-7'>
          {displayDate && (
            <>
              <p className="text-base text-white cursor-default">Fecha: </p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className={cn(
                      "w-[180px] justify-center text-left font-normal text-white",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(displayDate, "yyyy-MM-dd") || <span>Elegir Fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                  <Select onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="0">Hoy</SelectItem>
                      <SelectItem value="1">Mañana</SelectItem>
                      <SelectItem value="3">En 3 Días</SelectItem>
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
                <AlertDialogTitle>Estás totalmente seguro?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta acción no se puede deshacer. Esto completará permanentemente la clase.
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
      {s === 'pendiente' && (
        <span className="text-xl mr-2 cursor-pointer flex items-center justify-end gap-x-3"> 
          <DatePickerWithPresets onDateSelect={(newDate) => {
            if (isValid(newDate)) {
              setDisplayDate(newDate);
            }
          }} />
          {displayDate ? (
            <AlertDialog>
              <AlertDialogTrigger>
                <p className='flex text-center items-center justify-center bg-[#33FFD1] cursor-pointer rounded-3xl pt-1.5 pb-1.5 pr-8 pl-8 text-lg text-nowrap mr-2 text-[#0099FF] transition-colors duration-200 hover:bg-[#BDFF00] font-semibold w-full'>
                  Asignar Día
                </p>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Estás totalmente seguro?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Esta acción no se puede deshacer. Esto le pondrá una fecha a la clase.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction onClick={handlePendient}>Continuar</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : (
            <p className='text-white'>Sin fecha asignada</p>
          )}
        </span>
      )}
    </div>
  );
};

export default TaskCard;

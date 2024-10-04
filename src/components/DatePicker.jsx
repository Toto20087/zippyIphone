"use client"

import * as React from "react"
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

export function DatePickerWithPresets({ onDateSelect }) {
  const [date, setDate] = React.useState(null);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateSelect(newDate); // Pasa la fecha hacia el componente TaskCard
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            "w-[280px] justify-end text-left font-normal text-white",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Elegir Fecha</span>}
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
          <Calendar mode="single" selected={date} onSelect={handleDateChange} />
        </div>
      </PopoverContent>
    </Popover>
  );
}

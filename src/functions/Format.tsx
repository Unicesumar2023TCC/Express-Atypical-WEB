import { format, parseISO } from 'date-fns';

export function formatDateToDisplay(dateTimeString: string | undefined): string  {
  if(dateTimeString){
    const date = parseISO(dateTimeString);
    return format(date, 'dd/MM/yyyy HH:mm');
  }
  return '';
}
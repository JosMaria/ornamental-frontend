import { Status } from "../types/Identification";

export const translateStatus = (status: Status): string => {
  let statusTraslated;
  if (status === 'IN_CONSERVATION') {
    statusTraslated = 'EN CONSERVACIÓN';
  } else if (status === 'AVAILABLE') {
    statusTraslated = 'DISPONIBLE';
  } else {
    statusTraslated = 'NO EXISTENTE';
  }
  return statusTraslated; 
}
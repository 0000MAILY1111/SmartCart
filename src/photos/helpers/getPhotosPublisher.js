
import { Eventos } from '../data/Eventos';

export const getPhotosPublisher = (publisher) => {
   const validPublishers = ['Eventos'];    

   if (!validPublishers.includes(publisher)) {
       throw new Error(`${publisher} is not a valid publisher`);
   }

   return Eventos.filter(evento => evento.publisher === publisher);}


import React from 'react'
import { getPhotosPublisher } from '../helpers/getPhotosPublisher';

export const EventosList = ({publisher}) => {
    const eventos  = getPhotosPublisher(publisher);
  return (
    <>
    <ul>
        {
            eventos.map(evento => (
                <li key={evento.id}>
                    {evento.description}
                </li>
            ))
        }
    </ul>
    
    
    
    
    </>
  )
}

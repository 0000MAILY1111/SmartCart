import React from 'react'
import { EventosList } from '../components/EventosList'


export const EventosPage = () => {
  return (
    <>
    <div>Pagina de Eventos</div>
    
    <hr/>
    <EventosList publisher={'Eventos'}/>
    </>

    
  )
}

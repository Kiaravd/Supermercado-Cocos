import { useState } from 'react'
import './App.css'
//Para poder ver componentes 
//Importo el componente dentro del archivo
import CustomForm from './components/CustomForm'
import Navbar from './components/Navbar'
import { Button } from './components/Inputs'
import { CardMain } from './components/Cards'

function App() {
  //Muestro el componente importado
  return(
  <>
    <Navbar/>
    <div id='empl'>
      <h2 id='main'>Acceso para Empleados</h2>
      <Button type="main" content="Iniciar Sesión"/>
      <Button type="main" content="Registrarse"/>
      <CardMain 
        title="Instrucciones de trabajo"
        content="Por favor, asegúrate de seguir estas instrucciones"
        list1=""
        list2=""
        list3=""
      />
      <CardMain 
        title="Beneficios para Empleados"
        content="Como parte del equipo, disfrutas de:"
        list1=""
        list2=""
        list3=""
      />
      <CardMain 
        title="Políticas del Supermercado"
        content="Es importante seguir estas políticas:"
        list1=""
        list2=""
        list3=""
      />
    </div>
    

  </>
  )
}

export default App

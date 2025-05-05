import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//Para poder ver componentes 
//Importo el componente dentro del archivo
import CustomForm from './components/CustomForm'

function App() {
  //Muestro el componente importado
  return <CustomForm /> 
}

export default App

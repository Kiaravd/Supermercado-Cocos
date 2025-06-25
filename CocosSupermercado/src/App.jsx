import './App.css'
//Para poder ver componentes 
//Importo el componente dentro del archivo
import { Router } from './components/Router'
//Importación de las páginas
import HomePage from './pages/Home.jsx'
import RegisterPage from './pages/Register'

const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/register',
    Component: RegisterPage
  }
]

function App() {
  //Para compr

  //Muestro el componente importado
  return(
  <>
    <main>
      <Router routes={appRoutes}/>
    </main>
  </>
  )
}

export default App

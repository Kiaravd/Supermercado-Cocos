import { Link } from '../components/Link.jsx';
import NavBar from '../components/Navbar.jsx';
import { CardMain } from '../components/Cards.jsx';
import {Button} from '../components/Inputs.jsx'

function HomePage() {
  return (
    <>
      <NavBar />
      <div id='empl'>
        <h2 id='main'>Acceso para Empleados</h2>
        <Link to='/register'>Registrarse </Link>
        <Link to='/login'>Iniciar Sesión</Link>
        <CardMain title="Instrucciones de trabajo" content="Por favor, asegúrate de seguir estas instrucciones" list1="" list2="" list3="" />
        <CardMain title="Beneficios para Empleados" content="Como parte del equipo, disfrutas de:" list1="" list2="" list3="" />
        <CardMain title="Políticas del Supermercado" content="Es importante seguir estas políticas:" list1="" list2="" list3="" />
      </div>
    </>
  );
}

export default HomePage;
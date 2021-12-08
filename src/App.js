import './App.css';
import routes from './Routes';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';

function App() {
  const { isLoggedIn } = useSelector((state) => state.authentication);
  const routing = useRoutes(routes(isLoggedIn));

  return <>{routing}</>;
}

export default App;

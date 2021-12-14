import { Navigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const AuthChecker = ({ children, redirectTo }) => {
  const isLoggedIn = localStorage.getItem('Authorization');
  let redirect;
  switch (redirectTo) {
    case 'login':
      redirect = <Login />;
      break;
    case 'signup':
      redirect = <Signup />;
      break;
    default:
      redirect = <Navigate to={redirectTo} />;
  }
  return isLoggedIn ? children : redirect;
};
export default AuthChecker;

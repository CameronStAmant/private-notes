import Home from './components/Home';
import Notebook from './components/Notebook';
import NewNote from './components/NewNote';
import Note from './components/Note';
import Folder from './components/Folder';
import Login from './components/Login';
import Signup from './components/Signup';
import { Navigate, Outlet } from 'react-router-dom';

const routes = (isLoggedIn) => [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'signup',
    element: <Signup />,
  },
  {
    path: 'notebook',
    element: <Notebook />,
  },
  {
    path: 'notebook/:id',
    element: <Note />,
  },
  {
    path: 'notebook/:id/edit',
    element: <NewNote />,
    //       {
    //         //Change NewNote to better describe both new notes and edits
    //       }
  },
  {
    path: 'folders/:id',
    element: <Folder />,
  },
  {
    path: 'notes/new',
    element: <NewNote />,
  },
];

export default routes;

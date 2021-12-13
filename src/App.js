import './App.css';
import { useSelector } from 'react-redux';
import Home from './components/Home';
import Signup from './components/Signup';
import Notebook from './components/Notebook';
import Note from './components/Note';
import NewNote from './components/NewNote';
import Folder from './components/Folder';

import Login from './components/Login';

import { useRoutes, Routes, Route } from 'react-router-dom';

function App() {
  const { isLoggedIn } = useSelector((state) => state.authentication);
  // const routing = useRoutes(isLoggedIn);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="notebook" element={<Notebook />} />
      <Route path="notebook/:id" element={<Note />} />
      <Route path="notebook/:id/edit" element={<NewNote />} />
      <Route path="notebook/folders/:id" element={<Folder />} />
      <Route path="notes/new" element={<NewNote />} />
    </Routes>
  );
}

export default App;

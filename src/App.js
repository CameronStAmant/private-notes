import './App.css';
import Home from './components/Home';
import Notebook from './components/Notebook';
import Note from './components/Note';
import NewNote from './components/NewNote';
import Folder from './components/Folder';
import AuthChecker from './components/AuthChecker';

import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const isLoggedIn = localStorage.getItem('Authorization');

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="login"
        element={
          <AuthChecker redirectTo="login">
            <Notebook />
          </AuthChecker>
        }
      />
      <Route
        path="signup"
        element={
          <AuthChecker redirectTo="signup">
            <Notebook />
          </AuthChecker>
        }
      />
      <Route
        path="notebook"
        element={
          <AuthChecker redirectTo="../login">
            <Notebook />
          </AuthChecker>
        }
      />
      <Route
        path="notebook/:id"
        element={
          <AuthChecker redirectTo="../login">
            <Note />
          </AuthChecker>
        }
      />
      <Route
        path="notebook/:id/edit"
        element={
          <AuthChecker redirectTo="../login">
            <NewNote />
          </AuthChecker>
        }
      />
      <Route
        path="notebook/folders/:id"
        element={
          <AuthChecker redirectTo="../login">
            <Folder />
          </AuthChecker>
        }
      />
      <Route
        path="notes/new"
        element={
          <AuthChecker redirectTo="../login">
            <NewNote />
          </AuthChecker>
        }
      />
    </Routes>
  );
}

export default App;

import './App.css';
import Home from './components/Home';
import Notebook from './components/Notebook';
import NewNote from './components/NewNote';
import Note from './components/Note';
import Folder from './components/Folder';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/notebook">
          <Notebook />
        </Route>
        <Route exact path="/notes/new">
          <NewNote />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/notebook/folders/:id">
          <Folder />
        </Route>
        <Route exact path="/notebook/:id">
          <Note />
        </Route>
        <Route exact path="/notebook/:id/edit">
          <NewNote />
          {
            //Change NewNote to better describe both new notes and edits
          }
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

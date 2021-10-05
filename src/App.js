import './App.css';
import Home from './components/Home';
import Notebook from './components/Notebook';
import NewNote from './components/NewNote';
import Note from './components/Note';
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
        <Route exact path="/notebook/:id">
          <Note />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import './App.css';
import Home from './components/Home';
import Notebook from './components/Notebook';
import NewNote from './components/NewNote';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/notebook">
          <Notebook />
        </Route>
        <Route path="/notes/new">
          <NewNote />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

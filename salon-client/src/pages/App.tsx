import { Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ThemeToggler from '../components/ThemeToggler';
import Home from './Home';

function App() {
  return (
    <>
      <NavBar />
      <ThemeToggler />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;

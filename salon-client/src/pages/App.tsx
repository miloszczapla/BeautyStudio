import { Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from './Home';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;

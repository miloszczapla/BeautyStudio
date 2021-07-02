import { Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ThemeToggler from '../components/ThemeToggler';
import Home from './Home';
import Offer from './Offer';

function App() {
  return (
    <>
      <NavBar />
      <ThemeToggler />
      <main>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/offer'>
            <Offer />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

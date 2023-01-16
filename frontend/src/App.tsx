import { Route, Switch } from 'react-router-dom';
import NavigationHeader from './components/NavigationHeader';
import HomePage from './pages/HomePage';
import HttpCatsPage from './pages/HttpCatsPage';
import RandomDogPage from './pages/RandomDogPage';
import { Wrapper } from './styles/Containers';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <NavigationHeader />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/random-dog">
            <RandomDogPage />
          </Route>
          <Route exact path="/http-cats">
            <HttpCatsPage />
          </Route>
        </Switch>
      </Wrapper>
    </div>
  );
}

export default App;

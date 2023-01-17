import { Route, Switch } from 'react-router-dom';
import NavigationHeader from './components/NavigationHeader';
import ClientsPage from './pages/ClientsPage';
import HomePage from './pages/HomePage';
import HttpCatsPage from './pages/HttpCatsPage';
import LoginPage from './pages/LoginPage';
import RandomDogPage from './pages/RandomDogPage';
import UsersPage from './pages/UsersPage';
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
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/users">
            <UsersPage />
          </Route>
          <Route exact path="/clients">
            <ClientsPage />
          </Route>
        </Switch>
      </Wrapper>
    </div>
  );
}

export default App;

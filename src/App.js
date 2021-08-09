import { lazy, Suspense } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

const HomePage = lazy(() =>
  import('./components/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./components/MoviesPage' /* webpackChunkName: "movie-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage' /* webpackChunkName: "movie-detail-page" */
  ),
);

function App() {
  return (
    <div className="App">
      <nav className="mainNav">
        <NavLink exact to="/" className="mainNavLink" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/movies" className="mainNavLink" activeClassName="active">
          Movies
        </NavLink>
      </nav>

      <Suspense fallback={<h1>ЗАГРУЖАЕМ МАРШРУТ...</h1>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" exact component={MoviesPage} />
          <Route path="/movies/:moviesId" component={MovieDetailsPage} />
          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

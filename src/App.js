//I've created a folder pages that contains all the components of the current page.
//Every time I'll make significal changes I'll commit this project.
import React from 'react';
//Global Style
import GlobalStyle from './components/GlobaLStyle';
//Import Pages
import AboutMe from './Pages/AboutMe';
import MyWork from './Pages/MyWork';
import ContactMe from './Pages/ContactMe';
import MovieDetail from './Pages/MovieDetail';
//import Nav
import Nav from './components/Nav';
//Router
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        {/* exact means that I'll be directed to aboutMe section ONLY if there's
        "/" and nothing else later must be written if I want to go in this */}
        section.
        <Route path="/" exact>
          <AboutMe />
        </Route>{' '}
        {/* With "exact" keyword (again) I'll be redirected ONLY to "work"
        directory and nothing else later must be written if I want to go in this
        section. */}
        <Route path="/work" exact>
          <MyWork />
        </Route>
        {/* :id means that everything that's after "/work/" will bring me in
        MovieDetail */}
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

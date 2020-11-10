//I've created a folder pages that contains all the components of the current page.
//Every time I'll make significal changes I'll commit this project.
import React from 'react';
//Global Style
import GlobalStyle from './components/GlobaLStyle';
//Import Pages
import AboutMe from './Pages/AboutMe';
import MyWork from './Pages/MyWork';
import ContactMe from './Pages/ContactMe';
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
        <Route path="/" exact>
          <AboutMe />
        </Route>{' '}
        <Route path="/work">
          <MyWork />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

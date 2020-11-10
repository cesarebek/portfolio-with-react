//I've created a folder pages that contains all the components of the current page.
//Every time I'll make significal changes I'll commit this project.
import React from 'react';
//Global Style
import GlobalStyle from './components/GlobaLStyle';
//Import Pages
import AboutMe from './Pages/AboutMe';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutMe />
    </div>
  );
}

export default App;

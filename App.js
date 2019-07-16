import React from 'react';
import NavBar from './navbar/NavBar';
import GraphContent from './GraphContent/GraphContent';
import ProjectList from './projectlist/ProjectList';
import Commentlist from './Commentlist/Commentlist';
import TeamList from './Teamlist/TeamList';

import './app.css';

function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <div className="panel">
          <ProjectList />
          <Commentlist/>
        </div>
        <div className="aside">
          <GraphContent/>
          <TeamList />
        </div>
      </div>
    </>
  );
}

export default App;
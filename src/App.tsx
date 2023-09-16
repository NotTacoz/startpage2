import React from 'react';
import './App.css';
import * as Component from './components';

function App() {
  const [showSidebar, setShowSidebar] = React.useState(false);

  function toggleSidebar(): any {
    setShowSidebar(!showSidebar);
  }

  return (
    <div className={`App ${showSidebar ? 'with-sidebar' : 'without-sidebar'}`}>
      <div className="header">
        <h1>Startpage v2</h1>
      </div>
      {showSidebar && (<div className="menu">
        < Component.Settings />
      </div>)}
      <div className="main">
        < Component.Todo />
      </div>
      <div className="footer">
        <button onClick={() => { toggleSidebar() }}>Collapse Settings</button>
      </div>
    </div>
  );
}

export default App;
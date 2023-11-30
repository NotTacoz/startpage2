import React from 'react';
import './App.css';
import * as Component from './components';
import { useState } from 'react';

function App() {
  const [showSidebar, setShowSidebar] = React.useState(false);

  const [bgColor, setBgColor] = useState('');

  function toggleSidebar(): any {
    setShowSidebar(!showSidebar);
  }

  return (
    <div style={{backgroundColor: bgColor || "#000000", color: "white", }} className={`App ${showSidebar ? 'with-sidebar' : 'without-sidebar'}`}>
      <div className="header">
        <h1>Startpage v2</h1>
      </div>
      {showSidebar && (<div className="menu">
        < Component.Settings bgColor={bgColor} setBgColor={setBgColor} />
      </div>)}
      <div className="main">
        < Component.Todo />
        < Component.Timer />
        < Component.Time />
      </div>
      <div className="footer">
        <button onClick={() => { toggleSidebar() }}>Collapse Settings</button>
      </div>
    </div>
  );
}

export default App;
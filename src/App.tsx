import React from 'react';
import './App.css';
import * as Component from './components';
import { useState } from 'react';
import Draggable from 'react-draggable';

function App() {
  const [showSidebar, setShowSidebar] = React.useState(false);

  const [bgColor, setBgColor] = useState('');

  function toggleSidebar(): any {
    setShowSidebar(!showSidebar);
  }

  const eventHandler = (e: { type: any; }, data: any) => {
    console.log('Event Type', e.type);
    console.log({e, data});
  }

  return (
    <div style={{backgroundColor: bgColor || "#000000", color: "white", }} className={`App ${showSidebar ? 'with-sidebar' : 'without-sidebar'}`}>
      {showSidebar && (<div className="menu">
        < Component.Settings bgColor={bgColor} setBgColor={setBgColor} />
      </div>)}
      <div className="main">
        < Component.Todo />
        < Component.Timer />
        < Component.Time />
        {/* draggable component */}
        <Draggable bounds="parent" onDrag={eventHandler} defaultPosition={{x: 0, y: 0}}>
          <div><Component.Wide /></div>
        </Draggable>
        
      </div>
      <div className="footer">
        <button onClick={() => { toggleSidebar() }}>Collapse Settings</button>
      </div>
    </div>
  );
}

export default App;
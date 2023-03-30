import { useEffect, useState } from 'react';
import './App.css';

// Component
import SideBarComponent from './Component/SideBar';
import Content from './Component/Content';

function App() {
  return (
    <div className="App">
      <SideBarComponent />
      <Content></Content>
    </div>
  );
}

export default App;
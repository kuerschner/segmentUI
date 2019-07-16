import React from 'react';
import './App.css';
import TopNav from './components/topNav/TopNav'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'

function App() {
  return (
    <div className="App gridContainer">
      <TopNav />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;

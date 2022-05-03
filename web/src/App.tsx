import React from 'react';
import './App.scss';
import Connect2Phantom from './components/connect-phantom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Select Wallet</h1>
        <p>My USDC: --</p>
        <Connect2Phantom/>

      </header>
    </div>
  );
}

export default App;

import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [sessionToken, setSessionToken] = useState("undefined");

  return (
    <div className="App">
      <h1>Ayo</h1>
      {sessionToken}
      <Navbar />
    </div>
  );
}

export default App;

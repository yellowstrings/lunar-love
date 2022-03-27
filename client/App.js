import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

import MoonInfo from './components/Moon.jsx'

const App = () => {

  // creating useStates that i will need in other components
    // for Moon.jsx
  const [moonPhase, setMoonPhase] = useState('');
  const [moonSign, setMoonSign] = useState('');
  const [moonGraphic, setmoonGraphic] = useState('');


  return (
    <div>
      <MoonInfo moonPhase={moonPhase} setMoonPhase={setMoonPhase} moonSign={moonSign} setMoonSign={setMoonSign}/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

import itemsData from '../../data/data';

function App() {
  const [data, setData] = useState<Data[]>(itemsData);
  console.log(data);
  return (
    <div className="App">
      <div></div>
    </div>
  );
}

export default App;

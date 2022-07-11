import React, { useState } from 'react';
import './App.scss';

import itemData from '../../data/data';
import AppHeader from '../appHeader/appHeader';
import ItemList from '../itemList/itemList';

function App() {
  const [data, setData] = useState<Data[]>(itemData);

  return (
    <div className="App">
      <AppHeader />
      <main className="main">
        <section className="main__filters"></section>
        <section className="main__store">
          <ItemList data={data} />
        </section>
      </main>
    </div>
  );
}

export default App;

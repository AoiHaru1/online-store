import React, { useState } from 'react';
import './App.scss';

import itemData from '../../data/data';
import AppHeader from '../appHeader/appHeader';
import ItemList from '../itemList/itemList';
import ValueFilter from '../valueFilter/valueFilter';
import RangeFilter from '../rangeFilter/rangeFilter';
import SearchFilter from '../searchFilter/searchFilter';
import AppFooter from '../appFooter/appFooter';

function App() {
  const [data, setData] = useState<Data[]>(itemData);

  return (
    <div className="App">
      <AppHeader />
      <main className="main">
        <div className="wrapper">
          <section className="main__filters">
            <ValueFilter />
            <RangeFilter />
            <SearchFilter />
          </section>
          <section className="main__store">
            <ItemList data={data} />
          </section>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;

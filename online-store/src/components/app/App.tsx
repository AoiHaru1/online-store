import React from 'react';
import './App.scss';

import AppHeader from '../appHeader/appHeader';
import ItemList from '../itemList/itemList';
import ValueFilter from '../valueFilter/valueFilter';
import RangeFilter from '../rangeFilter/rangeFilter';
import SearchFilter from '../searchFilter/searchFilter';
import AppFooter from '../appFooter/appFooter';
import { useFilterContext } from '../context/context';

function App() {
  const filterContext = useFilterContext();
  const { data } = filterContext;

  return (
    <div className="app">
      <AppHeader />
      <main className="main">
        <div className="wrapper">
          <section className="main__filters">
            <ValueFilter />
            <RangeFilter />
            <SearchFilter />
          </section>
          <section className="main__store">
            {data.length ? (
              <ItemList data={data} />
            ) : (
              <div className="noitems-message">Извините, совпадений не обнаружено</div>
            )}
          </section>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;

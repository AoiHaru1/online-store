import React, { useState, useEffect } from 'react';
import './App.scss';

import itemData from '../../data/data';
import AppHeader from '../appHeader/appHeader';
import ItemList from '../itemList/itemList';
import ValueFilter from '../valueFilter/valueFilter';
import RangeFilter from '../rangeFilter/rangeFilter';
import SearchFilter from '../searchFilter/searchFilter';
import AppFooter from '../appFooter/appFooter';
import localStorageSet from '../service/localStorageSet';
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
            <ItemList data={data} />
          </section>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;

// localStorageSet();
// const [data, setData] = useState(itemData);
// const [valueFilter, setValueFilter] = useState<valueFilterStorage>(() => JSON.parse(localStorage.getItem('filterSettings')!));

// const onValueFilterChange = (key: string, value: string) => {
//   const newValue = JSON.parse(JSON.stringify(valueFilter));
//   if (newValue![key].includes(value)) {
//     newValue![key] = newValue![key].filter((x: string) => x !== value);
//     localStorage.setItem('filterSettings', JSON.stringify(newValue));
//     setValueFilter(newValue);
//     return;
//   }
//   newValue![key].push(value);
//   localStorage.setItem('filterSettings', JSON.stringify(newValue));
//   setValueFilter(newValue);
// };

// console.log(valueFilter);

// // useEffect(() => {
// //   localStorageSet();
// //   // setData((data) => data.filter((x) => x.color === valueFilter.color[0]));
// // }, []);

// useEffect(() => {
//   let filteredData = [...itemData];
//   if (valueFilter.color.length > 0) {
//     filteredData = filteredData.filter((item) => valueFilter.color.includes(item.color));
//   }
//   setData(filteredData);
// }, [valueFilter.color]);

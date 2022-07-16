import React from 'react';
import './rangeFilter.scss';

import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
import { useFilterContext } from '../context/context';

const RangeFilter = () => {
  return (
    <div className="main__range-filters">
      <h2 className="filter-title">Фильтры по диапозону</h2>
      <div className="stock-range">
        <span className="stock-range__title">Количество на складе: </span>
        <Nouislider range={{ min: 0, max: 100 }} start={[20, 80]} connect />
      </div>
      <div className="year-range">
        <span className="year-range__title">Год выхода на рынок: </span>
        <Nouislider range={{ min: 0, max: 100 }} start={[20, 80]} connect />
      </div>
    </div>
  );
};

export default RangeFilter;

import React from 'react';
import './rangeFilter.scss';

import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
import { useFilterContext } from '../context/context';

const RangeFilter = () => {
  const filterContext = useFilterContext();
  const { handleChangeReleaseRangeFilter, handleChangeStockRangeFilter } = filterContext;
  const savedData = localStorage.getItem('filterSettings');
  const object =
    savedData !== null
      ? JSON.parse(savedData)
      : { releaseRange: ['2000.00', '2022.00'], stockRange: ['0.00', '100.00'] };

  return (
    <div className="main__range-filters">
      <h2 className="filter-title">Фильтры по диапозону</h2>
      <div className="stock-range">
        <Nouislider
          range={{ min: 0, max: 100 }}
          start={[+object.stockRange[0], +object.stockRange[1]]}
          step={1}
          tooltips={true}
          connect
          onSlide={(data) => handleChangeStockRangeFilter(data)}
        />
        <span className="stock-range__title">Количество на складе </span>
      </div>
      <div className="year-range">
        <Nouislider
          range={{ min: 2000, max: 2022 }}
          start={[+object.releaseRange[0], +object.releaseRange[1]]}
          connect
          tooltips={true}
          step={1}
          onSlide={(data) => handleChangeReleaseRangeFilter(data)}
        />
        <span className="year-range__title">Год выхода на рынок </span>
      </div>
    </div>
  );
};

export default RangeFilter;

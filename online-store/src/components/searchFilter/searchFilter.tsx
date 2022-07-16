import React from 'react';
import { useFilterContext } from '../context/context';
import './searchFilter.scss';

const SearchFilter = () => {
  const filterContext = useFilterContext();
  const { handleChangeNameFilter, name } = filterContext;

  return (
    <div className="main__search-filters">
      <div className="search-input">
        <h3 className="filter-title">Поиск</h3>
        <input
          type="text"
          placeholder="Наберите текст"
          onChange={(e) => handleChangeNameFilter(e.target.value)}
        />
      </div>
      <div className="sort-option">
        <h3 className="filter-title">Сортировка</h3>
        <select name="hero">
          <option disabled>Выберите сортировку</option>
          <option value="По названию, от А до Я">По названию, от А до Я</option>
          <option value="По названию, от Я до А">По названию, от Я до А</option>
          <option value="По году, по возрастанию">По году, по возрастанию</option>
          <option value="По году, по убыванию">По году, по убыванию</option>
        </select>
      </div>
      <button className="reset-btn">Сброс фильтров</button>
    </div>
  );
};

export default SearchFilter;

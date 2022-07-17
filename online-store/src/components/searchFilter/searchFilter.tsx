import React from 'react';
import { useFilterContext } from '../context/context';
import './searchFilter.scss';

const SearchFilter = () => {
  const filterContext = useFilterContext();
  const {
    handleChangeNameFilter,
    name,
    handleChangeSortFilter,
    sort,
    handleChangeColorFilter,
    handleChangeFavoriteFilter,
    handleChangeSizeFilter,
    handleChangeManufacturerFilter,
  } = filterContext;

  const reset = () => {
    handleChangeSortFilter('nameSort');
    handleChangeNameFilter('');
    handleChangeColorFilter('');
    handleChangeSizeFilter('');
    handleChangeManufacturerFilter('');
    handleChangeFavoriteFilter('reset');
    (document.querySelector('.search') as HTMLInputElement)!.value = '';
  };

  return (
    <div className="main__search-filters">
      <div className="search-input">
        <h3 className="filter-title">Поиск</h3>
        <input
          type="text"
          className="search"
          placeholder="Наберите текст"
          onChange={(e) => handleChangeNameFilter(e.target.value)}
        />
      </div>
      <div className="sort-option">
        <h3 className="filter-title">Сортировка</h3>
        <select onChange={(e) => handleChangeSortFilter(e.target.value)} value={sort}>
          <option disabled>Выберите сортировку</option>
          <option value="nameSort">По названию, от А до Я</option>
          <option value="reverseNameSort">По названию, от Я до А</option>
          <option value="releaseSort">По году, по возрастанию</option>
          <option value="reverseReleaseSort">По году, по убыванию</option>
        </select>
      </div>
      <button className="reset-btn" onClick={reset}>
        Сброс фильтров
      </button>
    </div>
  );
};

export default SearchFilter;

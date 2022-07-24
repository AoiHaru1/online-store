import React from 'react';
import { useFilterContext } from '../context/context';
import './searchFilter.scss';

const SearchFilter = () => {
  const filterContext = useFilterContext();
  const {
    handleChangeNameFilter,
    handleChangeSortFilter,
    sort,
    handleChangeColorFilter,
    handleChangeFavoriteFilter,
    handleChangeSizeFilter,
    handleChangeManufacturerFilter,
    handleChangeStockRangeFilter,
    handleChangeReleaseRangeFilter,
    handleChangeBasketItemsCount,
  } = filterContext;

  const reset = () => {
    localStorage.setItem(
      'filterSettings',
      JSON.stringify({
        stockRange: [`${0 - Math.random()}`, `${100 + Math.random()}`],
        releaseRange: [`${2000 - Math.random()}`, `${2022 + Math.random()}`],
      })
    );
    handleChangeNameFilter('');
    handleChangeColorFilter('');
    handleChangeSizeFilter('');
    handleChangeManufacturerFilter('');
    handleChangeFavoriteFilter('reset');
    handleChangeStockRangeFilter(['0.00', '100.00']);
    handleChangeReleaseRangeFilter(['2000.00', '2022.00']);
    (document.querySelector('.search') as HTMLInputElement)!.value = '';
  };

  const settingsReset = () => {
    localStorage.setItem(
      'filterSettings',
      JSON.stringify({
        name: '',
        manufacturer: [],
        color: [],
        size: [],
        favorite: false,
        sort: 'nameSort',
        stockRange: ['0.00', '100.00'],
        releaseRange: ['2000.00', '2022.00'],
        basketItems: [],
      })
    );
    handleChangeNameFilter('');
    handleChangeColorFilter('');
    handleChangeSizeFilter('');
    handleChangeManufacturerFilter('');
    handleChangeFavoriteFilter('reset');
    handleChangeStockRangeFilter(['0.00', '100.00']);
    handleChangeReleaseRangeFilter(['2000.00', '2022.00']);
    handleChangeSortFilter('nameSort');
    handleChangeBasketItemsCount('');
    setTimeout(() => {
      window.location.reload();
    }, 0);
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
          autoFocus
          autoComplete="off"
        />
        <button
          className="clear"
          onClick={() => (
            ((document.querySelector('.search') as HTMLInputElement)!.value = ''), handleChangeNameFilter('')
          )}
        >
          x
        </button>
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
      <div className="buttons">
        <button className="reset-btn" onClick={reset}>
          Сброс фильтров
        </button>
        <button className="reset-btn" onClick={settingsReset}>
          Сброс настроек
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;

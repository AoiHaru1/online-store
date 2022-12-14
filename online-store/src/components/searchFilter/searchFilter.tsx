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
        <h3 className="filter-title">??????????</h3>
        <input
          type="text"
          className="search"
          placeholder="???????????????? ??????????"
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
        <h3 className="filter-title">????????????????????</h3>
        <select onChange={(e) => handleChangeSortFilter(e.target.value)} value={sort}>
          <option disabled>???????????????? ????????????????????</option>
          <option value="nameSort">???? ????????????????, ???? ?? ???? ??</option>
          <option value="reverseNameSort">???? ????????????????, ???? ?? ???? ??</option>
          <option value="releaseSort">???? ????????, ???? ??????????????????????</option>
          <option value="reverseReleaseSort">???? ????????, ???? ????????????????</option>
        </select>
      </div>
      <div className="buttons">
        <button className="reset-btn" onClick={reset}>
          ?????????? ????????????????
        </button>
        <button className="reset-btn" onClick={settingsReset}>
          ?????????? ????????????????
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;

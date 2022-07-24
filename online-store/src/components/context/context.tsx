import React, { createContext, useContext, useState, useEffect } from 'react';
import { editFilterState } from '../helpers/editFilterState';
import itemsData from '../../data/data';

interface initialContextValues {
  handleChangeColorFilter: (value: colorFilter) => void;
  handleChangeManufacturerFilter: (value: manufacturerFilter) => void;
  handleChangeFavoriteFilter: (value?: string) => void;
  handleChangeSizeFilter: (value: sizeFilter) => void;
  handleChangeNameFilter: (value: nameFilter) => void;
  handleChangeSortFilter: (value: sortFilter) => void;
  handleChangeStockRangeFilter: (value: stockRangeFilter) => void;
  handleChangeReleaseRangeFilter: (value: releaseRangeFilter) => void;
  handleChangeBasketItemsCount: (value: basketItemsCount) => void;
  data: Data[];
}

const initFilter: valueFilterStorage & initialContextValues = {
  name: '',
  manufacturer: [],
  color: [],
  size: [],
  favorite: false,
  sort: '',
  stockRange: ['0.00', '100.00'],
  releaseRange: ['2000.00', '2022.00'],
  basketItems: [],
  data: [],
} as unknown as valueFilterStorage & initialContextValues;

const filterContext = createContext(initFilter);

interface Props {
  children: JSX.Element;
}

const FilterProvider: React.FC<Props> = ({ children }) => {
  const [colorFilter, setColorFilter] = useState<colorFilter[]>([]);
  const [manufacturerFilter, setManufacturerFilter] = useState<manufacturerFilter[]>([]);
  const [favoriteFilter, setFavoriteFilter] = useState<favoriteFilter>(false);
  const [sizeFilter, setSizeFilter] = useState<sizeFilter[]>([]);
  const [nameFilter, setNameFilter] = useState('');
  const [sortFilter, setSortFilter] = useState('nameSort');
  const [stockRangeFilter, setStockRangeFilter] = useState<stockRangeFilter>(['0.00', '100.00']);
  const [releaseRangeFilter, setReleaseRangeFilter] = useState<releaseRangeFilter>(['2000.00', '2022.00']);
  const [basketItemsCount, setBasketItemsCount] = useState<basketItemsCount[]>([]);
  const [items, setItems] = useState(itemsData);

  const handleChangeColorFilter = (value: colorFilter) => {
    setColorFilter(editFilterState(colorFilter, value));
  };

  const handleChangeManufacturerFilter = (value: manufacturerFilter) => {
    setManufacturerFilter(editFilterState(manufacturerFilter, value));
  };

  const handleChangeFavoriteFilter = (value?: string) => {
    if (value) {
      setFavoriteFilter(false);
      return;
    }
    setFavoriteFilter(!favoriteFilter);
  };

  const handleChangeSizeFilter = (value: sizeFilter) => {
    setSizeFilter(editFilterState(sizeFilter, value));
  };

  const handleChangeNameFilter = (value: nameFilter) => {
    setNameFilter(value);
  };

  const handleChangeSortFilter = (value: sortFilter) => {
    setSortFilter(value);
  };

  const handleChangeStockRangeFilter = (value: stockRangeFilter) => {
    setStockRangeFilter(value);
  };

  const handleChangeReleaseRangeFilter = (value: releaseRangeFilter) => {
    setReleaseRangeFilter(value);
  };

  const handleChangeBasketItemsCount = (value: basketItemsCount) => {
    if (value !== '' && basketItemsCount.length === 20 && !basketItemsCount.includes(value)) {
      return;
    }
    setBasketItemsCount(editFilterState(basketItemsCount, value));
  };

  useEffect(() => {
    const newItems = itemsData
      .filter((item) => (colorFilter.length ? colorFilter.includes(item.color) : true))
      .filter((item) => (manufacturerFilter.length ? manufacturerFilter.includes(item.manufacturer) : true))
      .filter((item) => (sizeFilter.length ? sizeFilter.includes(item.size) : true))
      .filter((item) => (favoriteFilter ? item.popular : true))
      .filter((item) =>
        nameFilter.length ? item.name.toLowerCase().includes(nameFilter.toLowerCase()) : true
      )
      .sort((a: Data, b: Data): number => {
        if (sortFilter === 'nameSort') {
          return a.name.localeCompare(b.name);
        }
        if (sortFilter === 'reverseNameSort') {
          return b.name.localeCompare(a.name);
        }
        if (sortFilter === 'releaseSort') {
          return +a.release - +b.release;
        }
        return +b.release - +a.release;
      })
      .filter((item) => item.stock >= +stockRangeFilter[0] && item.stock <= +stockRangeFilter[1])
      .filter((item) => +item.release >= +releaseRangeFilter[0] && +item.release <= +releaseRangeFilter[1]);
    setItems(newItems);
  }, [
    colorFilter.length,
    manufacturerFilter.length,
    sizeFilter.length,
    favoriteFilter,
    nameFilter,
    sortFilter,
    stockRangeFilter,
    releaseRangeFilter,
    basketItemsCount.length,
  ]);

  useEffect(() => {
    const savedData = localStorage.getItem('filterSettings');
    if (savedData) {
      const object = JSON.parse(savedData) as unknown as valueFilterStorage;
      setColorFilter(object.color);
      setManufacturerFilter(object.manufacturer);
      setSizeFilter(object.size);
      setFavoriteFilter(object.favorite);
      setNameFilter(object.name);
      setSortFilter(object.sort);
      setStockRangeFilter(object.stockRange);
      setReleaseRangeFilter(object.releaseRange);
      setBasketItemsCount(object.basketItems);
    } else {
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
    }
  }, []);

  window.addEventListener('beforeunload', () => {
    localStorage.setItem(
      'filterSettings',
      JSON.stringify({
        name: '',
        manufacturer: [...manufacturerFilter],
        color: [...colorFilter],
        size: [...sizeFilter],
        favorite: favoriteFilter,
        sort: sortFilter,
        stockRange: [...stockRangeFilter],
        releaseRange: [...releaseRangeFilter],
        basketItems: [...basketItemsCount],
      })
    );
  });

  return (
    <filterContext.Provider
      value={{
        color: colorFilter,
        manufacturer: manufacturerFilter,
        size: sizeFilter,
        favorite: favoriteFilter,
        name: nameFilter,
        data: items,
        sort: sortFilter,
        stockRange: stockRangeFilter,
        releaseRange: releaseRangeFilter,
        basketItems: basketItemsCount,
        handleChangeColorFilter,
        handleChangeFavoriteFilter,
        handleChangeSizeFilter,
        handleChangeManufacturerFilter,
        handleChangeNameFilter,
        handleChangeSortFilter,
        handleChangeStockRangeFilter,
        handleChangeReleaseRangeFilter,
        handleChangeBasketItemsCount,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

const useFilterContext = () => useContext(filterContext);
export { useFilterContext, FilterProvider };

import React, { createContext, useContext, useState, useEffect } from 'react';
import { editFilterState } from '../helpers/editFilterState';
import itemsData from '../../data/data';

interface initialContextValues {
  handleChangeColorFilter: (value: colorFilter) => void;
  handleChangeManufacturerFilter: (value: manufacturerFilter) => void;
  handleChangeFavoriteFilter: () => void;
  handleChangeSizeFilter: (value: sizeFilter) => void;
  handleChangeNameFilter: (value: nameFilter) => void;
  handleChangeSortFilter: (value: sortFilter) => void;
  data: Data[];
}

const initFilter: valueFilterStorage & initialContextValues = {
  name: '',
  manufacturer: [],
  color: [],
  size: [],
  favorite: false,
  sort: '',
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
  const [sortFilter, setSortFilter] = useState('');
  const [items, setItems] = useState(itemsData);

  const handleChangeColorFilter = (value: colorFilter) => {
    setColorFilter(editFilterState(colorFilter, value));
  };

  const handleChangeManufacturerFilter = (value: manufacturerFilter) => {
    setManufacturerFilter(editFilterState(manufacturerFilter, value));
  };

  const handleChangeFavoriteFilter = () => {
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

  useEffect(() => {
    const newItems = itemsData
      .filter((item) => (colorFilter.length ? colorFilter.includes(item.color) : true))
      .filter((item) => (manufacturerFilter.length ? manufacturerFilter.includes(item.manufacturer) : true))
      .filter((item) => (sizeFilter.length ? sizeFilter.includes(item.size) : true))
      .filter((item) => (favoriteFilter ? item.popular : true))
      .filter((item) =>
        nameFilter.length ? item.name.toLowerCase().includes(nameFilter.toLowerCase()) : true
      )
      .sort((a: any, b: any): any => {
        if (sortFilter === 'nameSort') {
          return a.name.localeCompare(b.name);
        }
        if (sortFilter === 'reverseNameSort') {
          return b.name.localeCompare(a.name);
        }
        if (sortFilter === 'releaseSort') {
          return a.release - b.release;
        }
        if (sortFilter === 'reverseReleaseSort') {
          return b.release - a.release;
        }
      });
    setItems(newItems);
  }, [
    colorFilter.length,
    manufacturerFilter.length,
    sizeFilter.length,
    favoriteFilter,
    nameFilter,
    sortFilter,
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
    } else {
      localStorage.setItem(
        'filterSettings',
        JSON.stringify({ name: '', manufacturer: [], color: [], size: [], favorite: false, sort: 'nameSort' })
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
        handleChangeColorFilter,
        handleChangeFavoriteFilter,
        handleChangeSizeFilter,
        handleChangeManufacturerFilter,
        handleChangeNameFilter,
        handleChangeSortFilter,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

const useFilterContext = () => useContext(filterContext);
export { useFilterContext, FilterProvider };

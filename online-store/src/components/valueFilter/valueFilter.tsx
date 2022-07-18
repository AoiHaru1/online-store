import React from 'react';
import { useFilterContext } from '../context/context';
import './valueFilter.scss';

type Props = {
  onValueFilterChange?: (key: string, value: string) => void;
};

const ValueFilter: React.FC<Props> = (props) => {
  const filterContext = useFilterContext();
  const {
    handleChangeColorFilter,
    color,
    handleChangeFavoriteFilter,
    favorite,
    handleChangeManufacturerFilter,
    manufacturer,
    handleChangeSizeFilter,
    size,
  } = filterContext;
  return (
    <div className="main__value-filters">
      <h2 className="filter-title">Фильтры по значению</h2>
      <ul className="manufacturer-list list">
        <span className="manufacturer-list__title">Производитель: </span>
        <div className="content-wrapper">
          <button
            className={`manufacturer-list__item btn ${manufacturer.includes('Centek') && 'active'}`}
            onClick={() => handleChangeManufacturerFilter('Centek')}
          ></button>
          <button
            className={`manufacturer-list__item btn ${manufacturer.includes('Brayer') && 'active'}`}
            onClick={() => handleChangeManufacturerFilter('Brayer')}
          ></button>
          <button
            className={`manufacturer-list__item btn ${manufacturer.includes('First') && 'active'}`}
            onClick={() => handleChangeManufacturerFilter('First')}
          ></button>
          <button
            className={`manufacturer-list__item btn ${manufacturer.includes('Kelli') && 'active'}`}
            onClick={() => handleChangeManufacturerFilter('Kelli')}
          ></button>
        </div>
      </ul>
      <ul className="size-list list">
        <span className="size-list__title">Размер: </span>
        <div className="content-wrapper">
          <button
            className={`size-list__item btn ${size.includes('Small') && 'active'}`}
            onClick={() => handleChangeSizeFilter('Small')}
          >
            S
          </button>
          <button
            className={`size-list__item btn ${size.includes('Medium') && 'active'}`}
            onClick={() => handleChangeSizeFilter('Medium')}
          >
            M
          </button>
          <button
            className={`size-list__item btn ${size.includes('Large') && 'active'}`}
            onClick={() => handleChangeSizeFilter('Large')}
          >
            L
          </button>
        </div>
      </ul>
      <ul className="color-list list">
        <span className="color-list__title">Цвет: </span>
        <div className="content-wrapper">
          <button
            className={`color-list__item btn ${color.includes('White') && 'color-active'}`}
            onClick={() => handleChangeColorFilter('White')}
          ></button>
          <button
            className={`color-list__item btn ${color.includes('Silver') && 'color-active'}`}
            onClick={() => handleChangeColorFilter('Silver')}
          ></button>
          <button
            className={`color-list__item btn ${color.includes('Black') && 'color-active'}`}
            onClick={() => handleChangeColorFilter('Black')}
          ></button>
          <button
            className={`color-list__item btn ${color.includes('Brown') && 'color-active'}`}
            onClick={() => handleChangeColorFilter('Brown')}
          ></button>
        </div>
      </ul>
      <div className="popular list">
        <span className="popular__title">Популярный: </span>
        <button
          className={`popular__btn btn ${favorite && 'popular-active'}`}
          onClick={() => handleChangeFavoriteFilter()}
        ></button>
      </div>
    </div>
  );
};

export default ValueFilter;

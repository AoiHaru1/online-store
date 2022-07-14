import React from 'react';
import './valueFilter.scss';

const ValueFilter = () => {
  return (
    <div className="main__value-filters">
      <h2 className="filter-title">Фильтры по значению</h2>
      <ul className="manufacturer-list list">
        <span className="manufacturer-list__title">Производитель: </span>
        <div className="content-wrapper">
          <button className="manufacturer-list__item btn"></button>
          <button className="manufacturer-list__item btn"></button>
          <button className="manufacturer-list__item btn"></button>
        </div>
      </ul>
      <ul className="size-list list">
        <span className="size-list__title">Размер: </span>
        <div className="content-wrapper">
          <button className="size-list__item btn">S</button>
          <button className="size-list__item btn">M</button>
          <button className="size-list__item btn">L</button>
        </div>
      </ul>
      <ul className="color-list list">
        <span className="color-list__title">Цвет: </span>
        <div className="content-wrapper">
          <button className="color-list__item btn"></button>
          <button className="color-list__item btn"></button>
          <button className="color-list__item btn"></button>
          <button className="color-list__item btn"></button>
        </div>
      </ul>
      <div className="popular list">
        <span className="popular__title">Популярный: </span>
        <button className="popular__btn btn"></button>
      </div>
    </div>
  );
};

export default ValueFilter;

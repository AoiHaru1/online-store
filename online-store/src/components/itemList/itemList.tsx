import React, { ChangeEvent, useState } from 'react';
import { useFilterContext } from '../context/context';
import './itemList.scss';

type Props = {
  data: Data[];
};

const itemList: React.FC<Props> = ({ data }) => {
  const filterContext = useFilterContext();
  const { basketItems, handleChangeBasketItemsCount } = filterContext;
  const items = data.map((item) => {
    const warnHandle = (e: any) => {
      console.log(e.target);
      if (basketItems.length === 20 && !basketItems.includes(item.name)) {
        e.target!.classList.add('warn');
        setTimeout(() => {
          e.target!.classList.remove('warn');
        }, 1000);
      }
      handleChangeBasketItemsCount(item.name);
    };
    return (
      <div
        className={`card ${basketItems.includes(item.name) ? 'basket-active' : ''}`}
        key={item.name}
        onClick={(e) => warnHandle(e)}
      >
        <img src={require(`../../assets/img/${item.image}`)} alt={item.name} className="card__img" />
        <div className="card__description">
          <h4 className="card__name">{item.name}</h4>
          <div className="card__info">
            <span>Stock: {item.stock}</span>
            <span className="card__release">Release date: {item.release}</span>
            <span className="card__color">Color: {item.color}</span>
            <span className="card__manufacturer">Manufacturer: {item.manufacturer}</span>
            <span className="card__size">Size: {item.size}</span>
            <span className="card__popular">Popular: {item.popular ? 'yes' : 'no'}</span>
          </div>
        </div>
      </div>
    );
  });
  return <ul className="main__card-list">{items}</ul>;
};

export default itemList;

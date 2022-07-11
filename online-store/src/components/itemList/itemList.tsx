import React, { useState } from 'react';
import './itemList.scss';

type Props = {
  data: Data[];
};

const itemList: React.FC<Props> = ({ data }) => {
  const items = data.map((item) => {
    return (
      <div className="card" key={item.name}>
        <img src={require(`../../assets/img/${item.image}`)} alt={item.name} className="card__img" />
        <div className="card__description">
          <h4 className="card__name">{item.name}</h4>
          <span>Stock: {item.stock}</span>
          <span className="card__release">Release date: {item.release}</span>
          <span className="card__color">Color: {item.color}</span>
          <span className="card__manufacturer">Manufacturer: {item.manufacturer}</span>
        </div>
      </div>
    );
  });
  return <ul className="main__card-list">{items}</ul>;
};

export default itemList;
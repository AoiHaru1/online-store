import React from 'react';
import './appHeader.scss';

type Props = {
  basketCount: number;
};

const appHeader: React.FC<Props> = ({ basketCount }) => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__content">
          <div className="header__logo">
            <img src={require('../../assets/img/logo.png')} alt="logo" />
            <h1>Online-Store</h1>
          </div>
          <div className="header__purchase">
            <img src={require('../../assets/img/cart.png')} alt="logo" />
            <span>{basketCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default appHeader;

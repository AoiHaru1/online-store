import React from 'react';
import './appHeader.scss';

const appHeader: React.FC = () => {
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
            <span>0</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default appHeader;

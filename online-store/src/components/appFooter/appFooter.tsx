import React from 'react';
import './appFooter.scss';

const AppFooter = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <a href="https://rs.school/js/" className="footer__logo"></a>
        <div className="footer__description">
          <span className="year">2022</span>
          <a href="https://github.com/AoiHaru1" className="link">
            <img src={require('../../assets/img/github.png')} alt="GitHub" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;

import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import style from './hamburger-to-x.css';

const HamburgerToX = ({ openMenu, handleToggleMenu }) => (
  <button type="button" className={style.icon} onClick={handleToggleMenu}>
    <div className={cn(style.hamburger, openMenu && style.open)}>
      <span />
      <span />
      <span />
    </div>
  </button>
);

HamburgerToX.propTypes = {
  openMenu: PropTypes.bool,
  handleToggleMenu: PropTypes.func,
};

export default HamburgerToX;

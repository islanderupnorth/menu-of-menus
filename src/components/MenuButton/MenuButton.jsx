import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import style from './menu-button.css';
import slidein from '../SlideIn/hamburger-to-x.css';

const MenuButton = ({ menuSelected, isMenuSelected, toggleMenu }) => {
  let buttonStyle;
  let text;

  if (menuSelected === 'slidein') {
    buttonStyle = [
      isMenuSelected && style['show-menu-button'],
      slidein.icon,
      slidein['icon-static'],
    ];
  } else {
    buttonStyle = [
      style['menu-button'],
      isMenuSelected && style['show-menu-button'],
    ];
    text = 'Menu';
  }

  return (
    <button type="button" className={cn(buttonStyle)} onClick={toggleMenu}>
      {menuSelected === 'slidein' && (
        <div className={slidein.hamburger}>
          <span />
          <span style={{ left: 0, top: 9 }} />
          <span />
        </div>
      )}
      {text && text}
    </button>
  );
};

MenuButton.propTypes = {
  isMenuSelected: PropTypes.bool,
  menuSelected: PropTypes.string,
  toggleMenu: PropTypes.func.isRequired,
};

export default MenuButton;

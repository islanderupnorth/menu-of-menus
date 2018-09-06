import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import style from './visibility.css';

const Visibility = ({ children, fullWidth, visible }) => (
  <div
    className={cn(
      style.visibility,
      visible && style.visible,
      fullWidth && style['full-width'],
    )}
  >
    {children}
  </div>
);

Visibility.propTypes = {
  visible: PropTypes.bool,
  fullWidth: PropTypes.bool,
  children: PropTypes.node,
};

export default Visibility;

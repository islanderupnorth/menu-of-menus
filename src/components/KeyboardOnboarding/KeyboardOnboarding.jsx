import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './keyboard-onboarding.css';

class KeyboardOnboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onScrollTo, onToggleMenu, inputWasSpace } = this.props;
    return (
      <div className={style['keyboard-onboarding']}>
        <p className={style.instructions}>
          If you feel the same way about menus then here is a few just at your
          fingertips
        </p>
        <ul className={style['arrow-keys']}>
          <li className={style.up}>
            <button type="button" className={style['arrow-button']}>
              <FontAwesomeIcon icon="angle-up" />
            </button>
            <div className={style['arrow-button-shadow']} />
          </li>
          <li className={style.down}>
            <button
              type="button"
              className={style['arrow-button']}
              onClick={onScrollTo}
            >
              <FontAwesomeIcon icon="angle-down" />
            </button>
            <div className={style['arrow-button-shadow']} />
          </li>
          <li className={style.left}>
            <button type="button" className={style['arrow-button']}>
              <FontAwesomeIcon icon="angle-left" />
            </button>
            <div className={style['arrow-button-shadow']} />
          </li>
          <li className={style.right}>
            <button type="button" className={style['arrow-button']}>
              <FontAwesomeIcon icon="angle-right" />
            </button>
            <div className={style['arrow-button-shadow']} />
          </li>
        </ul>
        <p className={style.instructions}>
          Select a menu & hit space to toggle it
        </p>
        <div className={style.space}>
          <button
            type="button"
            className={cn(
              style['space-button'],
              inputWasSpace && style.pressed,
            )}
            onClick={onToggleMenu}
          >
            Space
          </button>
          <div className={style['space-button-shadow']} />
        </div>
      </div>
    );
  }
}

KeyboardOnboarding.propTypes = {
  onScrollTo: PropTypes.func,
  onToggleMenu: PropTypes.func,
  inputWasSpace: PropTypes.bool,
};

export default KeyboardOnboarding;

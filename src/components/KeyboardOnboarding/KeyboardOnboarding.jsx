import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './keyboard-onboarding.css';

const KeyboardOnboarding = ({
  onScrollTo,
  onToggleMenu,
  animateSpacebarPress,
}) => {
  const arrows = ['up', 'down', 'left', 'right'];
  return (
    <div className={style['keyboard-onboarding']}>
      <div className={style.emojis}>😍🤤</div>
      <p className={style.instructions}>
        There is nothing like a sleek menu. <br />
        If you agree, then here are a handful at your fingertips!
      </p>
      <ul className={style['arrow-keys']}>
        {arrows.map(arrow => (
          <li className={style[arrow]} key={arrow}>
            <button
              type="button"
              className={style['arrow-button']}
              onClick={arrow === 'down' && onScrollTo}
            >
              <FontAwesomeIcon icon={`angle-${arrow}`} />
            </button>
            <div className={style['arrow-button-shadow']} />
          </li>
        ))}
      </ul>
      <p className={style.instructions}>
        Select a menu and hit space to toggle away
      </p>
      <div className={style.space}>
        <button
          type="button"
          className={cn(
            style['space-button'],
            animateSpacebarPress && style.pressed,
          )}
          onClick={onToggleMenu}
        >
          Space
        </button>
        <div className={style['space-button-shadow']} />
      </div>
    </div>
  );
};

KeyboardOnboarding.propTypes = {
  onScrollTo: PropTypes.func,
  onToggleMenu: PropTypes.func,
  animateSpacebarPress: PropTypes.bool,
};

export default KeyboardOnboarding;

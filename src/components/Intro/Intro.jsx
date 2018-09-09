import React from 'react';
import PropTypes from 'prop-types';
import SplitText from 'react-pose-text';
import style from './intro.css';
import KeyboardOnboarding from '../KeyboardOnboarding/KeyboardOnboarding';

const charPoses = {
  exit: { opacity: 0, y: 4 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 20,
  },
};

const Intro = ({ onScrollTo, onToggleMenu, animateSpacebarPress }) => (
  <section className={style.header}>
    <h1 className={style.welcome}>Welcome to</h1>
    <h1 className={style.title}>
      <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
        Menu of Menus
      </SplitText>
    </h1>
    <p className={style.description}>There is nothing like a sleek menu</p>
    <span className={style.emojis}>😍🤤</span>
    <KeyboardOnboarding
      onScrollTo={onScrollTo}
      onToggleMenu={onToggleMenu}
      animateSpacebarPress={animateSpacebarPress && true}
    />
  </section>
);

Intro.propTypes = {
  onScrollTo: PropTypes.func,
  onToggleMenu: PropTypes.func,
  animateSpacebarPress: PropTypes.bool,
};

export default Intro;

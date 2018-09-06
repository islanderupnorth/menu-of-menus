import React, { Fragment } from 'react';
import SplitText from 'react-pose-text';
import style from './intro.css';

const charPoses = {
  exit: { opacity: 0, y: 4 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 20,
  },
};

const Intro = () => (
  <Fragment>
    <h1 className={style.welcome}>Welcome to</h1>
    <h1 className={style.title}>
      <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
        Menu of Menus
      </SplitText>
    </h1>
    <p className={style.description}>Nothing like sleek menus</p>
    <span className={style.emojis}>😍🤤</span>
  </Fragment>
);

export default Intro;

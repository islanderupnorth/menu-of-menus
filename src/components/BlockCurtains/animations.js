import posed from 'react-pose';

const gridProps = {
  open: {
    staggerChildren: 50,
  },
  closed: {
    staggerChildren: 30,
    staggerDirection: 1,
  },
};

const backgroundProps = {
  open: {
    y: '0%',
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 100,
    },
  },
  closed: {
    y: '-100%',
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 100,
    },
  },
};

const cardProps = {
  open: {
    // y: 0,
    opacity: 1,
    transition: { duration: 1000 },
  },
  closed: {
    // y: -150,
    opacity: 0,
    transition: { duration: 1000 },
  },
};

export const Card = posed.div(cardProps);
export const Grid = posed.ul(gridProps);
export const Background = posed.div(backgroundProps);

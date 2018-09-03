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
      stiffness: 200,
      damping: 100,
    },
  },
  closed: {
    y: '-100%',
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 100,
    },
  },
};

const cardProps = {
  open: {
    y: -10,
    opacity: 1,
    transition: { duration: 300 },
  },
  closed: {
    y: -30,
    opacity: 0,
    transition: { duration: 200 },
  },
};

export const Grid = posed.ul(gridProps);
export const Background = posed.div(backgroundProps);
export const Card = posed.li(cardProps);

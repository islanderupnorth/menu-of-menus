import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './blockcurtains.css';
import content from './props';
import { Background, Card, Grid } from './animations';

class BlockCurtains extends React.Component {
  state = {
    canHover: false,
  };

  handleHover = () => {
    const { showMenu } = this.props;

    if (showMenu) this.setState({ canHover: true });
    else this.setState({ canHover: false });
  };

  render() {
    const { canHover } = this.state;
    const { showMenu } = this.props;

    return (
      // <div className={style['falling-blocks']}>
      <Grid
        className={style.ul}
        pose={showMenu ? 'open' : 'closed'}
        onPoseComplete={this.handleHover}
      >
        {content.map((item, i) => (
          <li key={i} className={style.li}>
            <Background className={style.background} />
            <Card
              className={cx(
                style.content,
                canHover && showMenu && style['can-hover'],
              )}
            >
              <div className={style.emoji}>{item.emoji}</div>
              <div className={style.title}>{item.title}</div>
              <div className={style.text}>{item.text}</div>
              <div className={style.arrow}>></div>
            </Card>
          </li>
        ))}
      </Grid>
      // </div>
    );
  }
}

BlockCurtains.propTypes = {
  showMenu: PropTypes.bool,
};

export default BlockCurtains;

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './curtain-of-blocks.css';
import content from './props';
import { Background, Card, Grid } from './animations';
import Visibility from '../../containers/Visibility/Visibility';

class BlockCurtains extends React.Component {
  state = {
    animationState: null,
  };

  handleOnAnimationComplete = () => {
    const { showMenu } = this.props;

    if (showMenu) this.setState({ animationState: 'hasOpened' });
    else this.setState({ animationState: 'hasClosed' });
  };

  render() {
    const { animationState } = this.state;
    const { showMenu } = this.props;

    return (
      <Visibility visible={showMenu && true} fullWidth>
        <Grid
          className={cn(style['curtain-of-blocks'])}
          pose={showMenu ? 'open' : 'closed'}
          onPoseComplete={this.handleOnAnimationComplete}
        >
          {content.map(item => (
            <li key={item.icon} className={style.li}>
              <Background className={style.background}>
                <Card
                  className={cn(
                    style.content,
                    animationState === 'hasOpened' &&
                      showMenu &&
                      style['can-hover'],
                  )}
                >
                  <FontAwesomeIcon className={style.icon} icon={item.icon} />
                  <div className={style.title}>{item.title}</div>
                  <div className={style.text}>{item.text}</div>
                  <FontAwesomeIcon className={style.arrow} icon="angle-right" />
                </Card>
              </Background>
            </li>
          ))}
        </Grid>
      </Visibility>
    );
  }
}

BlockCurtains.propTypes = {
  showMenu: PropTypes.bool,
};

export default BlockCurtains;

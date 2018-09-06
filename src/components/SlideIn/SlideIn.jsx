import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import style from './slide-in.css';
import content from './props';
import Visibility from '../../containers/Visibility/Visibility';
import HamburgerToX from './HamburgerToX';

class SlideIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { showMenu, handleToggleMenu } = this.props;
    return (
      <Visibility visible={showMenu && true}>
        <div
          className={cn(style['slide-in'], showMenu && style.open)}
          ref={this.slideInRef}
        >
          <HamburgerToX
            openMenu={showMenu && true}
            handleToggleMenu={handleToggleMenu}
          />
          <div className={style['selected-cases']}>
            <h2 className={style.header}>Clients</h2>
            <ul>
              {content.selectedCases.map(item => (
                <li key={item}>
                  <span className={cn(style['case-item'], style[item])}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.menu}>
            <h2 className={style.header}>Menu</h2>
            <ul>
              {content.menu.map(item => (
                <li key={item}>
                  <span className={style['menu-item']}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={style['social-media']}>
            <ul>
              {content.social.map(item => (
                <li key={item}>
                  <span className={cn(style['social-item'], style[item])}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.footer}>
            <span className={style.copyright}>{content.copyright}</span>
            <span className={style.terms}>{content.terms}</span>
          </div>
        </div>
      </Visibility>
    );
  }
}

SlideIn.propTypes = {
  showMenu: PropTypes.bool,
  handleToggleMenu: PropTypes.func,
};

export default SlideIn;

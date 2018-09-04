import React, { Component } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';
import { hot } from 'react-hot-loader';
import cn from 'classnames';
import ScrollPercentage from 'react-scroll-percentage';
import style from './app.css';
import BlockCurtains from './components/BlockCurtains/BlockCurtains';
import './utils/icons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuSelected: null,
      menuOpen: false,
    };

    const { menuSelected } = this.state;
    this[menuSelected || 'blockcurtains'] = React.createRef();
  }

  componentDidMount = () => {
    document.addEventListener('keydown', e => this.handleKeyboard(e));
  };

  changeOption = e => {
    this.setState({
      menuSelected: e.currentTarget.id,
    });
  };

  handleBlockScroll = () => {
    const { menuOpen, menuSelected } = this.state;
    if (!menuOpen && menuSelected) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'unset';
  };

  handleInView = percentage => {
    this.setState({
      menuSelected:
        percentage >= 0.4 && percentage <= 0.6 ? 'blockcurtains' : false,
    });
  };

  handleKeyboard = e => {
    const { menuSelected } = this.state;
    // get mid possition of element and place it?
    console.log(
      'SPANKING DAT KEYBOARD',
      this.blockcurtains.current.getBoundingClientRect(),
    );
    if (e.code === 'ArrowDown') {
      e.preventDefault();
      this.handleScrollTo();
    }

    if (e.code === 'Space') {
      e.preventDefault();
      if (menuSelected === 'blockcurtains') {
        this.handleToggleMenu();
      }
    }
  };

  handleToggleMenu = () => {
    this.handleBlockScroll();

    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  handleScrollTo = ref => {
    scrollIntoView(this.blockcurtains.current, {
      behavior: 'smooth',
      scrollMode: 'if-needed',
    });
  };

  render() {
    const { menuSelected, menuOpen } = this.state;
    return (
      <div className={style.page}>
        <button
          type="button"
          className={cn(
            style['menu-button'],
            menuSelected && style['show-menu-button'],
            menuOpen && style['is-active'],
          )}
          onClick={this.handleToggleMenu}
        >
          Menu
        </button>
        <h1 className={style.headline}>Welcome to a</h1>
        <h1 className={style.headline2}>Menu of Menus</h1>
        <p className={style.intro}>
          Nothing like a sleek menu to make you drool
        </p>
        <span className={style.emojis}>😍🤤</span>
        <ul className={style['list-of-menus']}>
          <li className={style.menu} ref={this.blockcurtains}>
            <button
              type="button"
              id="blockcurtains"
              onClick={this.changeOption}
            >
              <h2>Falling Blocks</h2>
              <a href="https://www.digitalasset.com/">
                <span>by DigitalAsset</span>
              </a>
            </button>
          </li>
          <ScrollPercentage
            onChange={percentage => this.handleInView(percentage)}
          >
            {percentage => (
              <h2 style={{ color: 'red' }}>{`Percentage scrolled: ${
                percentage.percentage
              }%.`}</h2>
            )}
          </ScrollPercentage>
        </ul>
        <BlockCurtains
          showMenu={menuSelected === 'blockcurtains' && menuOpen && true}
        />
      </div>
    );
  }
}

export default hot(module)(App);

import React, { Component } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';
import { hot } from 'react-hot-loader';
// import ScrollPercentage from 'react-scroll-percentage';
import cn from 'classnames';
import { animateScroll as scroll } from 'react-scroll';
import style from './styles/global.css';
import MenuButton from './components/MenuButton/MenuButton';
import CurtainOfBlocks from './components/CurtainOfBlocks/CurtainOfBlocks';
import Intro from './components/Intro/Intro';
import SlideIn from './components/SlideIn/SlideIn';
import './utils/icons';
import menus from './props';

let count = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuSelected: null,
      menuOpen: false,
      animateSpacebarPress: null,
    };

    this.page = React.createRef();
    this.curtainofblocks = React.createRef();
    this.slidein = React.createRef();
    this.proximity = React.createRef();
    this.colors = React.createRef();
    this.fade = React.createRef();
    this.merge = React.createRef();
  }

  componentDidMount = () => {
    document.addEventListener('keydown', e => this.handleKeyboard(e));
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.animateSpacebarPress)
      setTimeout(() => {
        this.setState({ animateSpacebarPress: false });
      }, 300);
  };

  handleChangeOption = e => {
    this.setState({
      menuSelected: e.currentTarget.id,
    });
  };

  handleBlockScroll = () => {
    const { menuOpen, menuSelected } = this.state;
    if (!menuOpen && menuSelected) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'unset';
  };

  handleKeyboard = e => {
    const { menuSelected } = this.state;

    if (e.code === 'ArrowDown' || e.code === 'ArrowUp') {
      e.preventDefault();
      this.handleScrollTo(e.code);
    }

    if (e.code === 'Space') {
      e.preventDefault();
      if (menuSelected) {
        this.onToggleMenu('animateSpacebarPress');
      }
    }
  };

  onToggleMenu = input => {
    if (input === 'animateSpacebarPress')
      this.setState({ animateSpacebarPress: true });
    else this.setState({ animateSpacebarPress: false });

    this.handleBlockScroll();

    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  handleScrollTo = direction => {
    const { menuSelected, menuOpen } = this.state;

    // if (direction === 'ArrowUp' && !menuSelected) return;

    if (direction === 'ArrowUp' && menuSelected === menus[0].selectName) {
      this.setState({ menuSelected: null });
      scroll.scrollToTop({ duration: 600 });
      return;
    }

    if (!menuOpen && menuSelected) {
      if (direction === 'ArrowDown') {
        if (count <= menus.length - 2) count += 1;
        this.setState({ menuSelected: menus[count].selectName });
      }

      if (direction === 'ArrowUp') {
        if (count > 0) count -= 1;
        this.setState({ menuSelected: menus[count].selectName });
      }
    }

    if (direction !== 'ArrowUp' && !menuSelected) {
      this.setState({ menuSelected: menus[0].selectName });

      const node = this[menuSelected || menus[0].selectName].current;
      scrollIntoView(node, {
        behavior: 'smooth',
        scrollMode: 'if-needed',
      });
    }
  };

  render() {
    const { menuSelected, menuOpen, animateSpacebarPress } = this.state;

    return (
      <div className={style.page} ref={this.page}>
        <MenuButton
          isMenuSelected={menuSelected && true}
          menuSelected={menuSelected}
          toggleMenu={this.onToggleMenu}
          isMenuOpen={menuOpen && true}
        />
        <Intro
          onScrollTo={this.handleScrollTo}
          onToggleMenu={this.onToggleMenu}
          animateSpacebarPress={animateSpacebarPress && true}
        />

        <ul className={style['list-of-menus']}>
          {menus.map(menu => (
            <li
              key={menu.selectName}
              className={cn(
                style.menu,
                menuSelected === menu.selectName && style.selected,
              )}
              ref={this[menu.selectName]}
            >
              <button
                className={style.button}
                type="button"
                id={menu.selectName}
                onClick={this.handleChangeOption}
              >
                <h2 className={style['menu-title']}>{menu.title}</h2>
              </button>
            </li>
          ))}
        </ul>

        {menuSelected === 'slidein' && (
          <SlideIn
            showMenu={menuSelected === 'slidein' && menuOpen && true}
            handleToggleMenu={this.onToggleMenu}
          />
        )}
        {menuSelected === 'curtainofblocks' && (
          <CurtainOfBlocks
            showMenu={menuSelected === 'curtainofblocks' && menuOpen && true}
          />
        )}

        {/* Have mouse fontawesome mouse icon @keyframes move from left to right few times to demonstate action required
        <Proximity /> */}
        <p>🙏</p>
        <p>I like you, you made it to here!</p>
        <p>I hope you enjoyed the menus as much as I did creating them!</p>
        <p>🤓</p>
        <p>
          Hit that space bar one last time to see credit (fixed on top like
          menus)
        </p>
      </div>
    );
  }
}

export default hot(module)(App);

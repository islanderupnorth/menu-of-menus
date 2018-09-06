import React, { Component } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';
import { hot } from 'react-hot-loader';
// import ScrollPercentage from 'react-scroll-percentage';
import cn from 'classnames';
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
    };

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
        this.onToggleMenu();
      }
    }
  };

  onToggleMenu = () => {
    this.handleBlockScroll();

    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  handleScrollTo = direction => {
    const { menuSelected } = this.state;
    if (direction === 'ArrowDown' && menuSelected) {
      if (count <= menus.length - 2) count += 1;
      this.setState({ menuSelected: menus[count].selectName });
    }
    if (direction === 'ArrowUp' && menuSelected) {
      if (count > 0) count -= 1;
      this.setState({ menuSelected: menus[count].selectName });
    }
    if (!menuSelected) this.setState({ menuSelected: menus[0].selectName });

    const node = this[menuSelected || 'curtainofblocks'].current;
    scrollIntoView(node, {
      behavior: 'smooth',
      scrollMode: 'if-needed',
    });
  };

  render() {
    const { menuSelected, menuOpen } = this.state;
    return (
      <div className={style.page}>
        <MenuButton
          isMenuSelected={menuSelected && true}
          menuSelected={menuSelected}
          toggleMenu={this.onToggleMenu}
        />
        <Intro />

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

        <CurtainOfBlocks
          showMenu={menuSelected === 'curtainofblocks' && menuOpen && true}
        />
        <SlideIn
          showMenu={menuSelected === 'slidein' && menuOpen && true}
          handleToggleMenu={this.onToggleMenu}
        />
        {/* <SlideIn showMenu /> */}
      </div>
    );
  }
}

export default hot(module)(App);

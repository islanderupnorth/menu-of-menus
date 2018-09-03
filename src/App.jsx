import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import style from './app.css';
import BlockCurtains from './components/BlockCurtains/BlockCurtains';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuSelected: 'blockcurtains',
      menuOpen: false,
    };
  }

  changeOption = e => {
    this.setState({
      menuSelected: e.currentTarget.id,
    });
  };

  handleToggleMenu = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  render() {
    const { menuSelected, menuOpen } = this.state;
    return (
      <div className={style.page}>
        <button
          type="button"
          className={style['menu-button']}
          onClick={this.handleToggleMenu}
        >
          Menu
        </button>
        <h1>Menu of Menus</h1>
        <ul>
          <button type="button" id="blockcurtains" onClick={this.changeOption}>
            <h2>Falling Blocks</h2>
            <a href="https://www.digitalasset.com/">
              <span>by DigitalAsset</span>
            </a>
          </button>
        </ul>
        <BlockCurtains showMenu={menuOpen && true} />
      </div>
    );
  }
}

export default hot(module)(App);

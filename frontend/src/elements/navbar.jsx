import React, { Component } from 'react';

import "../scss/navbar.scss";

class Navbar extends Component {
  state = {
    showMenu: false
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    const { showMenu } = this.state;

    return (
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">RED Store</a>
        <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
          <span className="navbar-toggler-icon">...</span>
        </button>
        <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/">Home</a>
            <a className="nav-item nav-link" href="/admin">Admin</a>
            <a className="nav-item nav-link" href="/search">Search</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

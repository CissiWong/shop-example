import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

class Header extends React.Component {

  render() {
    return (
      <div className="header-container">
        <input id="hamburger" type="checkbox" className="hamburger-checkbox" />
        <label className="hamburger" htmlFor="hamburger">
          <div className="bar bar1" />
          <div className="bar bar2" />
          <div className="bar bar3" />
        </label>

        <Link to="/"><h1 className="logo-title">Watches & Art</h1></Link>

        <div className="menu">
          <ul className="menu-list">
            <li>Watches</li>
            <li>Chairs</li>
            <li>Art</li>
          </ul>
        </div>

        <ul className="menu-desktop">
          <li>Watches</li>
          <li>Chairs</li>
          <li>Art</li>
        </ul>

      </div>
    )
  }
}

export default Header

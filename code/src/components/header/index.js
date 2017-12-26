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
            <Link to="/categories/a3mi"><li>Watches</li></Link>
            <Link to="/categories/a3mj"><li>Chairs</li></Link>
            <Link to="/categories/a3mh"><li>Art</li></Link>
          </ul>
        </div>

        <ul className="menu-desktop">
          <Link to="/categories/a3mi"><li>Watches</li></Link>
          <Link to="/categories/a3mj"><li>Chairs</li></Link>
          <Link to="/categories/a3mh"><li>Art</li></Link>
        </ul>

      </div>
    )
  }
}

export default Header

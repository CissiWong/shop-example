import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

class Header extends React.Component {

  render() {
    return (
      <div className="header-container">
        <div className="symbols-container">
          <img className="symbol" src="/shopping-bag.png" alt="" />
          <img className="symbol" src="/magnifying-glass.png" alt="" />
        </div>
        <div className="logo-container">
          <label className="hamburger" htmlFor="hamburger">
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </label>
          <input id="hamburger" type="checkbox" className="hamburger-checkbox" />

          <div className="menu">
            <ul>
              <li>Watches</li>
              <li>Chairs</li>
              <li>Art</li>
            </ul>
          </div>
          <Link to="/"><h1>Watches & Art</h1></Link>
        </div>

        <hr />
      </div>
    )
  }
}

export default Header

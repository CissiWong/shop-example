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
          <Link to="/"><h1 className="logo-title">Watches & Art</h1></Link>
        </div>
          <label className="hamburger" htmlFor="hamburger">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </label>
          <input id="hamburger" type="checkbox" className="hamburger-checkbox" />

          <div className="menu">
            <ul>
              <li>Watches</li>
              <li>Chairs</li>
              <li>Art</li>
            </ul>
          </div>


        <hr />
      </div>
    )
  }
}

export default Header

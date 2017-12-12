import React from "react"
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
          <h1>Watches & Art</h1>
        </div>


        <label className="hamburger" for="hamburger">
          <div className="bar1"> </div>
          <div className="bar2"> </div>
          <div className="bar3"> </div>
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

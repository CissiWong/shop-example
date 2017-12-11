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
        <hr />
      </div>
    )
  }
}

export default Header

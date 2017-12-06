import React from "react"
import "./index.css"

class Header extends React.Component {
  render() {
    return(
      <div className="header-container">
        <div className="symbols-container">
          <div>Cart</div>
          <div>Search</div>
        </div>
        <div className="logo-container">
          <h1>Watches & Art</h1>
        </div>
      </div>
    )
  }

}

export default Header

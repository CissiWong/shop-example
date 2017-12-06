import React from "react"
import "./index.css"

class Header extends React.Component {
  render() {
    return(
      <div className="header-container">
        <div className="logo-container">
          <h1>Watches & Art</h1>
          <div className="symbols-container">
            <ul>
              <li>Cart</li>
              <li>Search</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default Header

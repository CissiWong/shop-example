import React from "react"

class Header extends React.Component {
  render() {
    return(
      <div className="header-container">
        <div className="logo-container">
          <h1>Watches & Art</h1>
        </div>
        <div className="symbols-container">
          <ul>
            <li>Cart</li>
            <li>Search</li>
          </ul>
        </div>
        <div className="categories-container">
          <ul>
            <li>All</li>
            <li>Watches</li>
            <li>Art</li>
            <li>Chairs</li>
          </ul>
        </div>
      </div>
    )
  }

}

export default Header

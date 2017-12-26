import React from "react"
import ProductCollection from "components/ProductCollection"
import "./index.css"

class Homepage extends React.Component {
  render() {
    return (
      <div className="body-container">
        <div className="hero-image-container">
          <img className="hero-image" src="/christopher-burns-435998.jpg" alt="" />
        </div>
        <div className="hero-products">Our Products</div>
        <ProductCollection />
      </div>
    )
  }
}

export default Homepage

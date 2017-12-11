import React from "react"
import "./index.css"


class ProductThumb extends React.Component {
  render() {
    return (
      <div className="product-container">
        <img className="product-image" src={this.props.image} alt="" />
        <div className="product-info">
          <div className="product-title">{this.props.title}</div>
          <div className="product-price">{this.props.price} {this.props.currency}</div>
          <button className="product-btn">Buy</button>
        </div>
      </div>
    )
  }
}

export default ProductThumb

import React from "react"
import "./product.css"

class Product extends React.Component {
  render() {
    return (
      <div className="product-container">
        <img src={this.props.image} alt="" />
        <div>{this.props.title}</div>
        <div>{this.props.price} {this.props.currency}</div>
      </div>
    )
  }
}

export default Product

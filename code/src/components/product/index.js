import React from "react"

class Product extends React.Component {
  render() {
    return (
      <div className="product-container">
        <div>{this.props.title}</div>
        <div>{this.props.price}</div>
      </div>
    )
  }
}

export default Product

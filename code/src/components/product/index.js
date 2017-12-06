import React from "react"

class Product extends React.Component {
  render() {
    return (
      <div className="product-container">
        <div>{this.props.title}</div>
        <div>{this.props.price} {this.props.currency}</div>
        <img src={this.props.image} alt="" />
      </div>
    )
  }
}

export default Product

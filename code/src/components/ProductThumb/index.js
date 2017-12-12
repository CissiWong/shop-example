import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

class ProductThumb extends React.Component {
  render() {
    return (
      <div className="ProductThumb">
        <Link to={`/product/${this.props.id}`}>
          <img className="product-image" src={this.props.image} alt="" />
        </Link>
        <div className="product-info">
          <div className="product-title">{this.props.title}</div>
          <div className="product-price">{(this.props.price / 100).toLocaleString()} {this.props.currency}</div>
          <button className="product-btn">Buy</button>
        </div>
      </div>
    )
  }
}

export default ProductThumb

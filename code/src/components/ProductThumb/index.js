import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

class ProductThumb extends React.Component {
  render() {
    return (
      <Link to={`/product/${this.props.id}`}>
        <div className="ProductThumb">
          <img className="product-image" src={this.props.image} alt="" />
          <div className="product-info">
            <div className="product-title">{this.props.title}</div>
            <div className="product-price">{this.props.price} {this.props.currency}</div>
            <button className="product-btn">Buy</button>
          </div>
        </div>
      </Link>
    )
  }
}

export default ProductThumb

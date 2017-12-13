import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

class ProductThumb extends React.Component {
  render() {
    return (
      <div className="ProductThumb-container">
        <div className="ProductThumb">
          <Link to={`/product/${this.props.id}`}>
            <img className="product-image" src={this.props.image} alt="" />
          </Link>
          <div className="product-info">
            <div className="product-title">{this.props.title}</div>
            <div className="product-price">{(this.props.price / 100).toLocaleString()} {this.props.currency}</div>
            {this.props.onSale &&
              <div className="onSale">
                {(this.props.originalPrice / 100).toLocaleString()} {this.props.currency}
              </div>
            }
            <button className="product-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductThumb

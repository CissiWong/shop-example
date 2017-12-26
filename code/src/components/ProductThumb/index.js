import React from "react"
import { Link } from "react-router-dom"
import "./index.css"

class ProductThumb extends React.Component {
  buyNow() {
    fetch("https://api.tictail.com/v1.26/carts", {
      method: "POST",
      body: JSON.stringify({
        store_id: "5zns",
        attribution: "technigo",
        items: [{
          product_id: this.props.id,
          variation_id: this.props.variationId,
          quantity: 1
        }]
      }),
      headers: { "Content-type": "application/json" }
    }).then(response => {
      return response.json()
    }).then(json => {
      window.location.href = `https://tictail.com/checkout?cart_token=${json.token}`
    })
  }

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
            <button onClick={() => this.buyNow()} className="product-btn">Buy now</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductThumb

import React from "react"
import "./index.css"

class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Product: {}
    }
  }

  componentDidMount() {
    fetch(`https://api.tictail.com/v1.25/stores/5zns/products/${this.props.id}`).then(response => {
      console.log(response)
      return response.json()
    }).then(json => {
      this.setState({ Product: json })
    })
  }

  render() {
    // const isOnSale = this.state.Product.sale_active
    if (!this.state.Product.id) {
      return null
    }
    return (
      <div className="ProductDetail">
        <div className="product-detail-container">
          <img className="product-detail-image" src={this.state.Product.images[0].url} alt="" />
        </div>
        <div className="product-information">
          <div className="inner-margin">
            <div className="product-id">
              Product ID: {this.state.Product.id}
            </div>
            <div className="product-title">
              {this.state.Product.title}
            </div>
            <div className="product-description">
              {this.state.Product.description}
            </div>
            <div className="product-amount">
              Price: {
                (this.state.Product.price / 100).toLocaleString()} {this.state.Product.currency}
              {this.state.Product.sale_active &&
              <div className="onSale-detail">
                {
                  (this.state.Product.original_price / 100).toLocaleString()
                } {this.state.Product.currency}
              </div>
              }
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetail

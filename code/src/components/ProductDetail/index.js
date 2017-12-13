import React from "react"
import "./index.css"

class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Product: {},
      displayedImage: {}
    }
  }

  componentDidMount() {
    fetch(`https://api.tictail.com/v1.25/stores/5zns/products/${this.props.id}`).then(response => {
      return response.json()
    }).then(json => {
      this.setState({ Product: json, displayedImage: json.images[0] })
    })
  }

  smallImageClicked(image) {
    this.setState({ displayedImage: image })
  }

  render() {
    if (!this.state.Product.id) {
      return null
    }

    return (
      <div className="ProductDetail">
        <div className="product-detail-container">
          <img className="product-detail-image" src={this.state.displayedImage.url} alt="" />
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
            {this.state.Product.images.length > 1 &&
              <div className="extraImages">
                {this.state.Product.images.map(image => {
                  console.log(image)
                  return <img onClick={() => this.smallImageClicked(image)} key={image.id} className="product-detail-image-small" src={image.url} alt="" />
                })
                }
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetail

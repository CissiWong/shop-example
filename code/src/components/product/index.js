import React from "react"
import "./index.css"


class Product extends React.Component {
  render() {
    return (
      <section>
        <div className="product-container">
          <img src={this.props.image} alt="" />
          <div className="product-info">
            <div>{this.props.title}</div>
            <div>{this.props.price} {this.props.currency}</div>
          </div>
        </div>
      </section>
    )
  }
}

export default Product

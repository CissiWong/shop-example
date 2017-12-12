import React from "react"
import ProductDetail from "components/ProductDetail"
import "./index.css"

class ProductPage extends React.Component {
  render() {
    return (
      <div>
        <ProductDetail id={this.props.match.params.productid} />
      </div>
    )
  }
}

export default ProductPage

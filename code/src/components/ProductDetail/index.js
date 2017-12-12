import React from "react"

class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Product: {}
    }
  }

  componentDidMount() {
    fetch(`https://api.tictail.com/v1.25/stores/5zns/products/${this.props.id}`).then(response => {
      return response.json()
    }).then(json => {
      this.setState({ Product: json })
    })
  }

  render() {
    return (
      <div className="ProductDetail">
        {this.state.Product.map(item => {
          return <div className="product-container">
            {item.title}
            {item.price} {item.currency}
            {item.description}
            {item.image}
          </div>
        })}
      </div>
    )
  }
}

export default ProductDetail

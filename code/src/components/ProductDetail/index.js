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
      console.log(response)
      return response.json()
    }).then(json => {
      this.setState({ Product: json })
    })
  }

  render() {
    return (
      <div className="ProductDetail">
        Product ID: {this.state.Product.id}
        <br />
        Price: {this.state.Product.price}
        <br />
        Title: {this.state.Product.title}
        <br />
        Description: {this.state.Product.description}
      </div>
    )
  }
}

export default ProductDetail

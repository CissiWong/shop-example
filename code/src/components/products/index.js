import React from "react"
import Product from "../product"
import Categories from "../categories"

class Products extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Products: []
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5zns/products").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({ Products: json })
    })
  }

  render() {
    return (
      <div className="Products">
        {this.state.Products.map((item) => {
          return <Product
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.images[0].url}
            description={item.description}
            currency={item.currency}
            categories={item.categories}/>
        })}

      </div>
    )
  }
}

export default Products

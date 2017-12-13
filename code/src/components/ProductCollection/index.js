import React from "react"
import ProductThumb from "components/ProductThumb"
import "./index.css"

class ProductCollection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Products: []
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5zns/products").then(response => {
      return response.json()
    }).then(json => {
      this.setState({ Products: json })
    })
  }

  render() {
    return (
      <div className="PC-container">
        <div className="count">All products:
          {this.state.Products.length}
        </div>
        <div className="ProductCollection">
          {this.state.Products.map(item => {
            return <ProductThumb
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.images[0].url}
              description={item.description}
              currency={item.currency}
              categories={item.categories[0].slug}
              onSale={item.sale_active}
              originalPrice={item.original_price}
              variationId={item.variations[0].id}/>
          })}
        </div>
      </div>
    )
  }
}

export default ProductCollection

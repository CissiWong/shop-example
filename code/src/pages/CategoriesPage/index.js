import React from "react"
import ProductThumb from "components/ProductThumb"
import "./index.css"

class CategoriesPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    this.fetchProducts(this.props.match.params.categoriesid)
  }

  fetchProducts(catId) {
    fetch(`https://api.tictail.com/v1.26/stores/5zns/products?categories=${catId}`).then(response => {
      return response.json()
    }).then(json => {
      console.log(json)
      this.setState({ categories: json })
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log("mountAgain: ", nextProps)
    if (this.props.match.params.categoriesid !== nextProps.match.params.categoriesid) {
      this.fetchProducts(nextProps.match.params.categoriesid)
    }
  }

  render() {
    return (
      <div className="CC-container">
        <div className="count">
          Number of products: {this.state.categories.length}
        </div>
        <div className="CategoryCollection">
          {this.state.categories.map(item => {
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
              originalPrice={item.original_price} />
          })}
        </div>
      </div>
    )
  }
}

export default CategoriesPage

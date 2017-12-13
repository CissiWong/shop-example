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
    const catId = this.props.match.params.categoriesid
    fetch(`https://api.tictail.com/v1.26/stores/5zns/products?categories=${catId}`).then(response => {
      console.log(response)
      return response.json()
    }).then(json => {
      console.log(json)
      this.setState({ categories: json })
    })
  }
  // `https://api.tictail.com/v1.26/stores/5zns/products?categories=${this.props.id}`
  //
  // render() {
  //   return (
  //     // id={this.state.match.params.categoriesid}
  //     <div className="category-container">
  //       {this.state.categories.product_count}
  //     </div>
  //   )
  // }

  // https://api.tictail.com/v1.25/stores/5zns/products?categories=a3mh

  // componentDidMount() {
  //   fetch("https://api.tictail.com/v1.26/stores/5zns/categories").then(response => {
  //     return response.json()
  //   }).then(json => {
  //     this.setState({ categories: json })
  //   })
  // }

  render() {
    return (
      <div className="Categories">
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
    )
  }
}

export default CategoriesPage

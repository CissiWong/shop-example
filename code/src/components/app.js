import React from "react"
import Footer from "./footer"
import Header from "./header"
import Products from "./products"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allProducts: []
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5zns/products").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({ allProducts: json })
    })}

  render() {
    return (
      <div className="allProducts" >
        {this.state.allProducts.map((item) => {
          return <div
            key={item.id}
            title={item.title}
            price={item.price}
           image={item.images.url} />
        })}
      </div>
    )
  }

}

export default App

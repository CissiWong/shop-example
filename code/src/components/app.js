import React from "react"
import Footer from "./footer"
import Header from "./header"
import Products from "./products"
import Categories from "./categories"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Categories />
        <Header />
        <Products />
        <Footer />
      </div>
    )
  }
}

export default App

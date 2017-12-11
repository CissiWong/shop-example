import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Header from "components/header"
import Footer from "components/footer"
import Homepage from "pages/Homepage"
import Categories from "pages/CategoriesPage"
import Product from "pages/ProductPage"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Homepage />
          <Footer />
          <div className="page">
            <Route path="/home" exact component={Homepage} />
            <Route path="/categories" component={Categories} />
            <Route path="/product" component={Product} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

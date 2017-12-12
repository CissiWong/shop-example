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
          <div className="page">
            <Route path="/" exact component={Homepage} />
            <Route path="/categories" component={Categories} />
            <Route path="/product" component={Product} />
          </div>
          <Footer />

        </div>
      </BrowserRouter>
    )
  }
}

export default App

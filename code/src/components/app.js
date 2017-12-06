import React from "react"
import Footer from "./footer"
import Header from "./header"
import Products from "./products"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        <Header />
        <Products />
      </div>
    )
  }
}

export default App

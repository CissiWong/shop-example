import React from "react"
import Home from "pages/home"
import Footer from "./footer"
import Header from "./header"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    )
  }
}

export default App

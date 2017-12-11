import React from "react"
import "./index.css"

class CategoriesPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    fetch("https://api.tictail.com/v1.26/stores/5zns/categories").then(response => {
      return response.json()
    }).then(json => {
      this.setState({ categories: json })
    })
  }

  render() {
    return (
      <div className="Categories">
        {this.state.categories.map(item => {
          return <div className="categories-container">
            {item.title}
          </div>
        })}
      </div>
    )
  }
}

export default CategoriesPage

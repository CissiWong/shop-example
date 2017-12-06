import React from "react"

class Categories extends React.Component {
  render() {
    return (
      <div className="category-container">
        <ul>
          <li>
            {this.props.categories}
          </li>
        </ul>
      </div>
    )
  }
}


export default Categories

import React from "react"

class Category extends React.Component {
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

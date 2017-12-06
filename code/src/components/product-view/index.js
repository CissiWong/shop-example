import React from "react"


class productView extends React.Component {
  render() {
    return (
      <div className="productView">
        <div>{this.props.title}</div>
        <div>{this.props.price} {this.props.currency}</div>
        <img src={this.props.image} alt="" />
        <div>{this.props.description}</div>
      </div>
    )
  }
}

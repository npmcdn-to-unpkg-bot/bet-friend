import React from 'react'

var ProductCategoryRow = React.createClass({
  render() {
    return (<tr><th colSpan='2'>{this.props.category}</th></tr>)
  }
});

var ProductRow = React.createClass({
  render() {
    var name = this.props.product.stocked ? this.props.product.name : <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }
})

var ProductTable = React.createClass({
  render() {
    var rows = []
    var lastCategory = null
    this.props.products.forEach(function forEachProduct(product) {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
      }
      rows.push(<ProductRow product={product} key={product.name} />)
      lastCategory = product.category
    })
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var SearchBar = React.createClass({
  render() {
    return (
      <form>
        <input type='text' placeholder='Search...' />
        <p>
          <input type='checkbox' />
          {' '}
          Only show products in stock
        </p>
      </form>
    )
  }
})

var App = React.createClass({
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    )
  }
})


export default App

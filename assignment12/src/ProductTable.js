import React, { Component } from 'react';

// Imports ProductRow component
import ProductRow from './ProductRow'
import Table from 'react-bootstrap/Table'






import './ProductRow';


class ProductTable extends Component {
    // Maps our data model (represented as an object) to an array 
    convertObjToArray = obj => {
      let productsArray = Object.keys(obj).map(pid => obj[pid])
      return productsArray
    }
  
    // Iterates through that array (.forEach()) and pushes a programmatically constructed <ProductRow> component to a temporary array. Call it ‘rows’ to makes things easy     
    renderTable = (productArray, filterText) => {
      let rows = []
      let filterTextLowerCase = filterText.toLowerCase() // convert to lowercase for case sensitivity matching
      productArray.forEach((product, index) => {
        if (product.name.toLowerCase().indexOf(filterTextLowerCase) === -1) { // not found
          return
        }
        rows.push(<ProductRow key={index} index={index} onDestroy={this.handleDestroy} product={product} />)
      })
      return rows
    }
  
    // Handler to delete a product on each row of table
    handleDestroy = id => {
      this.props.onDestroy(id)
    }
  
    // Renders a table. Table should contain headings and render out product row (now represented by rows array)
    render() {
      const { products, filterText } = this.props
      return (
        <Table striped bordered hover size="sm" variant="light">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderTable(this.convertObjToArray(products), filterText)}</tbody>
        </Table>
      )
    }
  }
  
  export default ProductTable
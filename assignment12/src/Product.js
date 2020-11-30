import React, { Component } from 'react';

// Imports Filters, ProductTable, and ProductForm components
import  Filter  from './Filter';
import  ProductTable  from './ProductTable';
import  ProductForm  from './ProductForm';

// Defines the data model (JSON data) 
let PRODUCTS = {
    '1': {id: 1, category: 'Snacks', price: '$3.99', name: 'Popcorn'},
    '2': {id: 2, category: 'Snacks', price: '$5.45', name: 'Gummy worms'},
    '3': {id: 3, category: 'Snacks', price: '$6.45', name: 'Chocolate covered cashews'},
    '4': {id: 4, category: 'Games', price: '$59.99', name: 'Dragon Quest XII'},
    '5': {id: 5, category: 'Games', price: '$11.99', name: 'Songbird Symphony'},
    '6': {id: 6, category: 'Games', price: '$29.99', name: 'Phoenix Wright Trilogy'}
 };

 // Renders a static heading and three components including <Filters>, <ProductTable>, and <ProductForm> in that order
 class Product extends Component {
     

     constructor(props) {
         super(props);
         
         this.state = {
             products : PRODUCTS,
             filterText : ''
         }
         this.handleFilter = this.handleFilter.bind(this);
         this.handleDestroy = this.handleDestroy.bind(this);
         this.handleSave = this.handleSave.bind(this);
     }


     handleFilter = (filterText) => {
         this.setState(filterText);
     }

     handleSave = (product) => {
        if (!product.id) {
             product.id = new Date().getTime()
        }
        this.setState((prevState) => {
          let products = prevState.products
          product.price  = '$'+product.price;
          products[product.id] = product
          return { products }
        });
    
      }
    
    handleDestroy = (productId) => {
    this.setState((prevState) => {
        let products = prevState.products
        delete products[productId]
        return { products }
    });
}


    render() {
    return (
        <div className="container">
        <div className="row justify-content-md-center">
            <div className="col-md-6">
            <h1>My Inventory</h1>
            <Filter 
                onFilter={this.handleFilter}/>

            <ProductTable 
                products={this.state.products} 
                filterText={this.state.filterText}
                onDestroy={this.handleDestroy}/>

            <ProductForm
                onSave={this.handleSave}/>
            </div>
        </div>
        </div>
    )
    }
}

export default Product;

 
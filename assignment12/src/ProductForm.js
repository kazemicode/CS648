import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


// Renders a form that displays text boxes for name, category, and price. Also renders a submit button for ‘Save’.

const RESET_VALUES = {id: '', category: '', price: '', name: ''}

class ProductForm extends Component {

    // constructor
    constructor(props) {
        super(props);
        // bind handler for submit button
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            product: Object.assign({}, RESET_VALUES), errors: {}
       };
       // bind change handler 
       this.handleChange = this.handleChange.bind(this);
    }


    // handler for the submit button:
    handleSave = (e) => {
        this.props.onSave(this.state.product);
        this.setState({
            product: Object.assign({}, RESET_VALUES), errors: {}
        })
        e.preventDefault(); // Prevent form from triggering HTTP POST
    }

    // Handler to update state on user input
    handleChange = (e) => {
        const target = e.target    
        const name = target.name
        const value = target.value

        this.setState((prevState) => {
             prevState.product[name] = value
             return { product: prevState.product }
        });
    }


    render() {
        return (
            <div>
                <h3>Add a new product</h3>
                <div className="col-md-6 myForm">
                    <form> 
                        <div className="form-group">
                            <label htmlFor="productName">Name</label>
                            <input className="form-control" id="productName" type="text" onChange={this.handleChange} value={this.state.product.name} name="name"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productCategory">Category</label>
                            <input className="form-control" id="productCategory" type="text" onChange={this.handleChange} value={this.state.product.category} name="category"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">Price</label>
                            <input className="form-control" id="productPrice" type="text" onChange={this.handleChange} value={this.state.product.price} name="price"></input>
                        </div>
                    
                        <button className="btn btn-info" type="button" onClick={this.handleSave}>Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ProductForm;
import React, { Component } from 'react'

class ProductRow extends Component {
    constructor(props) {
        super(props)
        this.destroy = this.destroy.bind(this)
    }

    destroy() {
        this.props.onDestroy(this.props.product.id);
    }

    render () {
        let instock = "Out of Stock";
        if(this.props.product.category){
            instock = "In Stock";
        }
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.category}</td>
                <td>${this.props.product.price}</td>
                <td>{instock}</td>
                
                <td class="text-right"><button onClick={this.destroy} class="btn btn-info">Delete</button></td>
            </tr>
        )
    }
}

export default ProductRow
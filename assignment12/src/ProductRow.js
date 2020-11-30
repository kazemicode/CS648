import React, {Component} from 'react';


class ProductRow extends Component {

    constructor(props) {
        super(props)
        this.destroy = this.destroy.bind(this)
   }
   
    destroy = () => {
        this.props.onDestroy(this.props.product.id)
    }


    // Renders a table row complete with <td> tags
    // Each <td> tag will display name and price (retrieved from props), and a button to delete an item
    render() {
        const { index, product } = this.props
        return (
            <tr key={index}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td id={product.id}>
                    <button className="btn btn-info" onClick={this.destroy}>Delete</button>
                </td>
            </tr>
        )
    }
}
export default ProductRow
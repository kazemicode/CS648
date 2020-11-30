import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

// Renders a form and a text box inside the form for search and filtering out our product list
class Filter extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
   }   

    handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        this.props.onFilter({
            [name]: value
     });

    }

    render() {
        return (
            <form>
            <InputGroup className="mb-3" onChange={this.handleChange} value={this.props.filterText}>
              <FormControl
                name="filterText"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Search..."
                aria-label="Search"
              />
            </InputGroup>
          </form>
        )
    }
}

export default Filter;
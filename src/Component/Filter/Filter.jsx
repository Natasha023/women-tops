import React, {Component} from 'react';
import {getSizeForDropdown} from '../../Services/Api';
import './Filter.css';

class Filter extends Component {
    constructor(props){
        super(props);
        this.state = {
         sizeOptions: [],
         selectedSize: ''
        }
    }

    componentDidMount(){
        const sizeOptions= getSizeForDropdown();
        debugger;
        console.log(sizeOptions);
        this.setState({sizeOptions});
    }

    handleSizeChange(event) {

        this.setState({selectedSize: event.target.value});
        this.props.onSizeChange(event.target.value);

    }
    
    render() {
        const {selectedSize, sizeOptions} = this.state;
        return (
        <select value={selectedSize} onChange={this.handleSizeChange.bind(this)}>
           <option value='All'>Filter by Size</option>
           {sizeOptions.map((option, index)=>
               ( <option key={index} value={option.value}>{option.label}</option>))
            }
         </select>
        )
    }
}

export default Filter;
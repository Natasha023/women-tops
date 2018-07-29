import React, {Component} from 'react';
import Filter from '../Filter/Filter';
import './Header.css';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter: ''
        }
    }

    onSizeChange(value){
        console.log(`Size change to: ${value}`)
        this.props.onSizeChange(value);
    }

    render(){
        return (
            <div className = "header">
                <h1 className ="headerName">Women's Tops</h1>
                <Filter onSizeChange={this.onSizeChange.bind(this)} className="headerFilter"></Filter>
            </div>
        )
    }
}

export default Header;
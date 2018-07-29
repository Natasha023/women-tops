import React, {Component} from 'react';
import {getAllClothes, filterBySize} from '../../Services/Api';
import ClothCard from '../../Component/ClothCard/ClothCard';
import './MainScreen.css';

class MainScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            clothes: [],
            size : this.props.size
        }
    }

    componentDidMount(){
      const {size} = this.props;
      //Fetch the clothes list on the filter type
      let clothes = size === 'All' ? getAllClothes() : filterBySize(size);
      console.log(`Size: ${size}`);

      this.setState({ clothes })
    }



    render(){
        const {size} = this.props;
        console.log(size);
        //Fetch the clothes list on the filter type
        let clothes = size === 'All' ? getAllClothes() : filterBySize(size);


        return (
            <ul className="container">
            {clothes.map((cloth, index)=>{
                return (<ClothCard cloth={cloth} key={index}></ClothCard>)
            })}
            </ul>
        );
    }
}

export default MainScreen;
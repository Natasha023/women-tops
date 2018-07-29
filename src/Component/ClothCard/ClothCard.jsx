import React, {Component} from 'react';

class ClothCard extends Component{
    render(){
      const {cloth} = this.props;
      return(<li>
                <img src= {require(`../../Resource/${cloth.productImage}`)} alt={cloth.productImage} className='img'></img>
                {cloth.isSale &&<span className="sale">Sale</span>}
                {cloth.isExclusive && <span className="exclusive">Exclusive</span>}
                <span className="product-name" >{cloth.productName}</span>
                <strong className="price">{cloth.price}</strong>
            </li>)
    }
}

export default ClothCard;
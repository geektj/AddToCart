import React from 'react';
import Header from '../../components/header';
import ItemRow from '../row';
// import Item from '../item';
// import shoes from '../../assets/images/shoes.jpeg';
// import HoverShoes from '../../assets/images/hover-shoes.jpeg';
// import Tshirt from '../../assets/images/t-shirt.jpeg';
// import HoverTshirt from '../../assets/images/tshirt-hover.jpeg';
// import Boxer from '../../assets/images/boxer.jpeg';
// import HoverBoxer from '../../assets/images/hocer-boxer.jpeg';
// import Shoes1 from '../../assets/images/nike-shoes.jpeg';
// import HoverShoes1 from '../../assets/images/nike-fullshoes.jpeg';
import '../../assets/css/style.scss';
import {PRODUCT_DATA} from '../../utills/constants'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        
        return(
            <div className="main-container">
                {PRODUCT_DATA.map((el, i) => <ItemRow data={el} key={i}  /> )}
            </div>
        )
    }
}
export default Home;
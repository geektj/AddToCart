import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/style.scss';

class Item extends Component{
    constructor(props){
        super(props);
        this.state =  {

        }
    }
    render(){
        const {info, routeName} = this.props;
        return(
            <>
            <div className="item-product">
                <Link to={`/${routeName}/${info.id}`} className="products">
                    <div className="product-image">
                        <img src={info.imageUrl} alt='shoes'/>
                        {/* <img src={info.imageUrl} alt="shoes" className="none-hover"/> */}
                    </div>
                    <div className="brand-info">
                        <div>
                            <div className="brand-name">{info.name}</div>
                            {/* <div className="product-name">OZWEEGO LITE W 'FTWR WHITE/FTWR WHITE/HAZY ORANGE'</div> */}
                            <div className="price">₹ {info.price}</div>
                        </div>
                    </div>
                </Link>
            </div>
            </>
        )
    }
}
export default Item;
import React,{Component} from 'react';
import Item from '../components/item';
import '../assets/css/style.scss';


class ItemRow extends Component{
    constructor(props){
        super(props);
        this.state =  {

        }
        
    }
    render(){
        const {data} = this.props;
        // console.log(this.state.PRODUCT_DATA)
        return(
            <>
            <div className="item-row">
                {data.items.map((product,index) => <Item routeName={data.routeName} info={product} key={index} />)}
                
            </div>
            </>
        )
    }
}
export default ItemRow;
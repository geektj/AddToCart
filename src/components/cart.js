import React,{Component} from 'react';
import '../assets/css/cart.scss';


class Cart extends Component{
    constructor(props){
        super(props);
        this.state =  {
            cartItems: []
        } 
    }

    componentDidMount () {
        let getCart = JSON.parse(localStorage.getItem('cart'))

        this.setState({ cartItems: getCart })
    }

    render(){
        const {cartItems} = this.state
        return(
            <>
            <div className="cart-page">
                <div className="margin-box">
                    <div className="header-text">Shopping Cart</div>
                    <div className="cart-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    {/* <th>Qty.</th> */}
                                    {/* <th>Total</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => {
                                    return (
                                        <tr>
                                            <td className="images">
                                            <img src={item.imageUrl} alt="image" />
                                            </td>
                                            <td>{item.name}</td>
                                            <td>₹ {item.price}</td>
                                            {/* <td>1</td> */}
                                            {/* <td>{}</td> */}
                                        </tr>
                                    )
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Cart;
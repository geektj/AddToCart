import React from 'react';
import '../assets/css/itemdesc.scss';
import {PRODUCT_DATA} from '../utills/constants' 

export default class ItemDesc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }
    addToCart = (e, obj) => {
        let getCart = JSON.parse(localStorage.getItem('cart'))
        // console.log('getCart', getCart)
        let cartProducts = getCart.length > 0 ? getCart : []
        cartProducts.push(obj)
        localStorage.setItem('cart', JSON.stringify(cartProducts))
    }
    componentDidMount () {
        const {category, productId} = this.props.match.params;

        let categoryObj = PRODUCT_DATA.filter((data) => data.routeName === category)[0]

        let getProduct = categoryObj.items.filter((item) => item.id == productId)[0]


        this.setState({data: getProduct})
        console.log('ss', getProduct)
    }
    render(){
        const {data} = this.state
        return(
            <div className="item-description">
                <div className="left-side">
                    <div className="product-img">
                        <img src={data.imageUrl} className="image" />
                    </div>
                </div>
                <div className="right-side">
                    <div className="brand-name">{data.name}</div>
                    <div className="product-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    <div className="product-price">₹ {data.price}</div>
                    <button className="addtobag-btn btn" type="submit" onClick={(e) => this.addToCart(e, data)} >Add to Bag</button>
                </div>
            </div>

        )
    }
}
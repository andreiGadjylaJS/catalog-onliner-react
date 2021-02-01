import React from 'react'
import './Product.css'
import RatingStars from './stars/RatingStars'
import RenderReview from './review/RenderReview'
import Offers from './offers/Offers'
import { Link } from "react-router-dom";


export default class Product extends React.Component {

    render() {
        const { product } = this.props
        return (
            <div className="products-position" >
                <a href={product.urlDescription}>
                    <img src={product.images} className="img--product" alt="" />
                </a>
                <div className="product__description">
                
                   <Link to="/product-details"> 
                   <a href={product.urlDescription}>{product.name_prefix}</a>
                   </Link>
                    <p>{product.description}</p>
                    <div className="wrapper--star">
                        <RatingStars rating={product.rating} />
                        <div className="reviews">
                            <a href={product.urlReviews}> <RenderReview count={product.count} /></a>
                        </div>
                    </div>
                </div>
                <p className="price">
                    <a href={product.urlPrice}>от {Math.trunc(product.price_min)} р.</a>
                </p>
                <div className="wrapper__button product__btn">
                    <a href={product.urlPrice}>{<Offers numberOffers={product.offers} />}</a>
                </div>
            </div>
        )

    }
}





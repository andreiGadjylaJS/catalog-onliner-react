import React from 'react'
import './ProductList.css'
import Product from '../product/Product'

export default class ProductList extends React.Component {
    render() {
        const { dataProducts } = this.props
        return <div>
            {dataProducts.map(product => <Product product={product} key={product.id} />)}
        </div>
    }
}
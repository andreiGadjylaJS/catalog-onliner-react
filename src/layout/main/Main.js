import React from "react"
import FilterList from "../../pages/filter/FilterList"
import ProductList from "../../pages/catalog/productList/ProductList"
import './Main.css'
import ProductDetails from "../../pages/productDetails/ProductDetails"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


const Main = ({ dataProducts, facets, filterValues, onChangeFilterValues, changeUrl }) => {
    return (
        <main>
            <section className="filter">
                <FilterList facets={facets} filterValues={filterValues} onChangeFilterValues={onChangeFilterValues} changeUrl={changeUrl} />
            </section>
            <section className="sectionProducts">
                <Switch>
                    <Route exact path="/"> <ProductList dataProducts={dataProducts} /> </Route>
                    <Route path="/product-details"> <ProductDetails /> </Route>
                </Switch>
            </section>
        </main >
    )
}

export default Main

// заменить 
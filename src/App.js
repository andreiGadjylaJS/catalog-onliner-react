import React from 'react'
import './App.css';
import Header from './layout/header/Header'
import ProductService from './services/ProductService'
import FacetsService from './services/FacetsService'
import Main from './layout/main/Main'

export default class App extends React.Component {

  state = {
    error: null,
    isLoaded: false,
    dataProducts: null,
    facets: null,
    filterValues: null,
    url: "https://catalog.onliner.by/sdapi/catalog.api/search/smartwatch?group=1",
  }

  productService = new ProductService(this.state.url)
  facetsService = new FacetsService()

  doesRequestUrlFilter = (newUrl) => {
    this.setState({
      url: newUrl
    })

    this.productService.getProducts(this.state.url)
      .then(
        result => this.setState({
          isLoaded: true,
          dataProducts: result
        }),
        error => this.getError(error)
      )
  }

  getError = error => {
    return this.setState({
      isLoaded: true,
      error
    })
  }



  componentDidMount() {
    this.productService.getProducts(this.state.url)
      .then(
        result => this.setState({
          isLoaded: true,
          dataProducts: result
        }),
        error => this.getError(error)
      )

    this.facetsService.getFacets()
      .then(
        ({ facetsItems, dictionaries, placeholders, filterValues }) => {
          this.setState({
            isLoaded: true,
            facets: { facetsItems, dictionaries, placeholders },
            filterValues: filterValues
          })
        },
        error => this.getError(error)
      )

  }

  render() {
    console.log('1')
    const { error, isLoaded, dataProducts, facets, filterValues } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else if (dataProducts && facets) {
      return <div>
        <Header />
        <Main dataProducts={dataProducts} facets={facets} filterValues={filterValues} onChangeFilterValues={this.onChangeFilterValues} changeUrl={this.doesRequestFiltrUrl} />
      </div >
    } else {
      return null
    }
  }
}

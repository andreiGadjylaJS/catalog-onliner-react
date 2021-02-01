export default class ProductService {
    constructor(url) {
        this.url = url

    }
    getProducts(url) {
        return (
            fetch(url)
                .then(result => result.json())
                .then(({ products }) => this.getOptions(products))
        )

    }

    getOptions(products) {
        return products.map(item => {
            return {
                id: item.id,
                name_prefix: item.extended_name,
                images: item.images.header,
                description: item.description,
                offers: item.prices ? item.prices.offers.count : 0,
                price_min: item.prices ? Math.trunc(item.prices.price_min.amount) : null,
                urlReviews: item.reviews.html_url,
                urlPrice: item.prices ? item.prices.html_url : '',
                rating: item.reviews.rating || 0,
                children: item.children.length ? item.children : null,
                urlDescription: item.html_url || null,
                count: item.reviews.count
            }
        })
    }

}

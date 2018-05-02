
class ProductList extends React.Component {
    render() {
        const sortedProducts = Seed.products.sort((a, b) => {
            return b.votes - a.votes
        })
        const productComponents = sortedProducts.map(product => (
            <Product
                key={'product-' + product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
            />
        ));

        return (
            <div className='product-list'>
                {productComponents}
            </div>
        );
    }
}

class Product extends React.Component {
    render() {
        return (
            <div className='row single-product'>
                <div className='col-lg-4 col-md-4 col-sm-4'>
                    <img className='img-fluid product-image' 
                    src={this.props.productImageUrl} />
                </div>
                <div className='col-lg-8 col-md-8 col-sm-8 details'>
                    <div className='row'>
                        <a href='#'>
                            <i className="fas fa-caret-up" />
                        </a>
                        <span className='product-votes'>
                            {this.props.votes}
                        </span>
                    </div>
                    <div className='row'>
                        <div className='description'>
                            <a href={this.props.url}>
                                {this.props.title}
                            </a>
                            <p>
                                {this.props.description}
                            </p>
                        </div>
                    </div>
                    <div className='row extra'>
                        <span>Submitted by:</span>
                        <img
                        className='img-fluid author-image'
                        src={this.props.submitterAvatarUrl}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);


class ProductList extends React.Component {
    render() {
        const product = Seed.products[0];
        return (
            <div className='single-product'>
                <Product 
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitterAvatarUrl={product.submitterAvatarUrl}
                    productImageUrl={product.productImageUrl}
                />
            </div>
        );
    }
}

class Product extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-lg-4'>
                    <img className='img-fluid product-image' 
                    src={this.props.productImageUrl} />
                </div>
                <div className='col-lg-8 details'>
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

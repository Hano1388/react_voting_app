
class ProductList extends React.Component {
    render() {
        return (
            <div className='single-product'>
                <Product />
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
                    src='images/products/image-aqua.png' />
                </div>
                <div className='col-lg-8 details'>
                    <div className='row'>
                        <div className='description'>
                            <a href='#'>Fort Knight</a>
                            <p>Authentic renaissance actors, delivered in just two weeks.</p>
                        </div>
                    </div>
                    <div className='row extra'>
                        <span>Submitted by:</span>
                        <img
                        className='img-fluid author-image'
                        src='images/avatars/daniel.jpg'
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

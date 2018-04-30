class ProductList extends React.Component {
    render() {
        return (
            <div className='single-product'>
                Hello, friend! I am a basic React component.
            </div>
        );
    }
}

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
);

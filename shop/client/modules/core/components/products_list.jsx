import React from 'react';
import ProductsItem from './products_item.jsx';

class ProductsList extends React.Component {
  handleSearch(e) {
    e.preventDefault();
    this.props.setSearchString(e.target.value);
  }

  render() {
    const products = this.props.products.map((product) => {
      if (this.props.filter === 'All') {
        return <ProductsItem key={product._id} product={product} addToCart={this.props.addToCart} />
      }

      if (this.props.filter === product.category) {
        return <ProductsItem key={product._id} product={product} addToCart={this.props.addToCart} />
      }
    });

    return (
      <div>
        <h2>
          <form className="form-inline">
            Products List - {this.props.filter}
            <input type="text" className="form-control pull-right"
              placeholder="Search" onInput={this.handleSearch.bind(this)} />
          </form>
        </h2>
        <div className="row">
          {products}
        </div>
      </div>
    );
  }
}

export default ProductsList;

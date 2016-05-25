import React from 'react';
import ProductsItem from './products_item.jsx';

class ProductsList extends React.Component {
  render() {
    const products = this.props.products.map((product) => {
      if (this.props.filter === 'All') {
        return <ProductsItem key={product._id} product={product} />
      }

      if (this.props.filter === product.category) {
        return <ProductsItem key={product._id} product={product} />
      }
    });

    return (
      <div>
        <h2>Products List - {this.props.filter}</h2>
        <div className="row">
          {products}
        </div>
      </div>
    );
  }
}

export default ProductsList;

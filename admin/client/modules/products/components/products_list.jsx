import React from 'react';
import ProductsAdd from './products_add.jsx';

class ProductsList extends React.Component {
  render() {
    return (
      <div>
         <h1>Showing all products</h1>
         <div className="well clearfix">
           <ProductsAdd
              categories={this.props.categories}
              productsAdd={this.props.productsAdd}
            />
         </div>
      </div>
    );
  }
}


export default ProductsList;

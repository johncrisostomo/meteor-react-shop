import React from 'react';
import ProductsAdd from './products_add.jsx';
import ProductsTable from './products_table.jsx';

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
          <ProductsTable 
            products={this.props.products}
            categories={this.props.categories}
            productsUpdate={this.props.productsUpdate}
            productsDelete={this.props.productsUpdate}
          /> 
      </div>
    );
  }
}


export default ProductsList;

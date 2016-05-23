import React from 'react';

class OrdersView extends React.Component {
  render() {
    const products = this.props.post.products.map((product, index) => {
      return <ProductMedia key={product.name + product.price} product={product} />;
    });
    return (
    <div>
      <div className="panel panel-default clearfix">
        <div className="panel-heading">
          <h3 className="panel-title"> Order #{this.props.post._id} </h3>
        </div>
        <div className="panel-body">
          {products} 
        </div>
        <div className="panel-footer">
          <div className="pull-right">
            Total : {this.props.post.total}
          </div>
        </div>
      </div>
    </div>
    );
  }
}

const ProductMedia = ({product}) => (
  <div class="media">
    <div class="media-left">
        <a href="#">
          <img class="media-object" src="http://i.stack.imgur.com/ruR4z.png" alt="..." />
        </a>
    </div>
    <div class="media-body">
      <h4 class="media-heading">{product.name}</h4>
      {product.category}
    </div>
  </div>
);

export default OrdersView;

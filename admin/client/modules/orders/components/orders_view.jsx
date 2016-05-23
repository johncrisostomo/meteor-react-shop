import React from 'react';

class OrdersView extends React.Component {
  render() {
    const products = this.props.post.products.map((product, index) => {
      return <ProductMedia key={product.name + product.price} product={product} />;
    });
    return (
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title"> Order #{this.props.post._id} </h3>
          </div>
          <div className="panel-body">
            {products}
          </div>
          <div className="row">
            <div className="col-md-3 col-md-offset-6">
              <h4>Total :</h4>
            </div>
            <div className="col-md-3">
              <h4>{this.props.post.total}</h4>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Sold to: </h3>
          </div>
          <div className="panel-body">
            <h4>{this.props.post.name}</h4>
            <h4>{this.props.post.email}</h4>
            <h4>{this.props.post.address}</h4>
          </div>
        </div>
        <a className="btn btn-primary pull-right" href="/">Back to Orders List</a>
      </div>
    </div>
    );
  }
}

const ProductMedia = ({product}) => (
  <div className="row">
    <div className="col-md-3">
      <img src="http://i.stack.imgur.com/ruR4z.png" />
    </div>
    <div className="col-md-3">
      <h4>{product.name}</h4>
      {product.category}
    </div>
    <div className="col-md-3">
      <h4><i>x {product.qty}</i></h4>
    </div>
    <div className="col-md-3">
      <h4>{product.price * product.qty}</h4>
    </div>
  </div>
);

export default OrdersView;

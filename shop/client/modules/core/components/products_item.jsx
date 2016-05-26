import React from 'react';

class ProductsItem extends React.Component {
  handleAddToCart(e) {
    e.preventDefault();
    this.props.addToCart(this.props.product._id,
      this.props.product.name,
      Number(this.refs.quantity.value),
      this.props.product.price,
      this.props.product.image_url);
  }

  handleQtyChange(e) {
    e.preventDefault();
    if (e.target.value < 1) {
      e.target.value = 1;
    }
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="thumbnail">
          <img src={this.props.product.image_url}
            style={{"width":242,"height":200}} />
          <div className="caption clearfix">
            <p>
              <span style={{"fontSize":14}} className="label label-danger pull-right">
                Php {this.props.product.price.toFixed(2)}
              </span>
            </p>
            <h3>{this.props.product.name}</h3>
            <p>{this.props.product.description}</p>
            <div className="row">
            <div className="col-xs-4">
              <input ref="quantity" type="number" min="1" className="form-control"
                defaultValue="1" onKeyUp={this.handleQtyChange.bind(this)} />
            </div>
              <a href="#" className="btn btn-info" onClick={this.handleAddToCart.bind(this)}>
                <span className="glyphicon glyphicon-shopping-cart"></span>
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsItem;

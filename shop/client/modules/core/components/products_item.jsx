import React from 'react';

class ProductsItem extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="thumbnail">
          <img src={this.props.product.image_url}
            style={{"width":242,"height":200}} />
          <div className="caption">
            <h3>{this.props.product.name}</h3>
            <p>{this.props.product.description}</p>
            <p>
              <a href="#" className="btn btn-primary">
                <span className="glyphicon glyphicon-shopping-cart"></span>
                Add to cart
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsItem;

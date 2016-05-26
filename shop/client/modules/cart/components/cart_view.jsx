import React from 'react';
import CartTable from './cart_table.jsx';

class CartView extends React.Component {
  componentDidMount() {
    $('#checkoutForm').hide();
    $('#cartModal').on('hidden.bs.modal', function() {
      $('#checkoutForm').hide();
      $('#toggleCheckout').show();
    });
  }

  toggleCheckout(e) {
    e.preventDefault();
    $(e.target).hide();
    $('#checkoutForm').show();
  }

  render() {
    return (
      <li>
      <a href="#" data-toggle="modal" data-target="#cartModal">
        Cart <span className="badge">{this.props.itemCount}</span>
      </a>
      <div id="cartModal" className="modal fade" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="cartModalLabel">Your Cart</h3>
            </div>
            <div className="modal-body clearfix">
              <CartTable cartItems={this.props.cartItems}
                removeFromCart={this.props.removeFromCart}
              />
              <a href="#" id="toggleCheckout"
                className="btn btn-danger btn-lg" onClick={this.toggleCheckout.bind(this)}>
                  Checkout
              </a>
            </div>
            <div id="checkoutForm">
              Checkout form!
            </div>
          </div>
        </div>
      </div>
      </li>
    );
  }
}

export default CartView;

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

  handleCheckOut(e) {
    e.preventDefault();
    const {fullName, email, address} = this.refs;
    const {itemCount} = this.props;
    if (itemCount) {
      this.props.checkout(fullName.value, email.value, address.value);
      $('#cartModal').modal('hide');
    }
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
                className="btn btn-danger btn-lg" readOnly={this.checkIfEmpty}
                  onClick={this.toggleCheckout.bind(this)}>
                  Checkout
              </a>
            </div>
            <div className="modal-footer clearfix" id="checkoutForm">
              <form onSubmit={this.handleCheckOut.bind(this)}>
                <div className="form-group">
                    <label className="pull-left">Full Name</label>
                  <input ref="fullName" type="text" required className="form-control"
                    placeholder="Full Name" />
                </div>
                <div className="form-group">
                  <label className="pull-left">Email Address</label>
                  <input ref="email" type="email" required className="form-control"
                    placeholder="Email" />
                </div>
                <div className="form-group">
                  <label className="pull-left">Address</label>
                  <textarea ref="address" className="form-control" required></textarea>
                </div>
                <div>
                  <small>
                    <i>Fill out the following to complete purchase</i>
                  </small>
                </div>
                <button type="submit" className="btn btn-success">
                  Complete Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </li>
    );
  }
}

export default CartView;

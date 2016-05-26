import React from 'react';
import CartRow from './cart_row.jsx';

class CartTable extends React.Component {
  render() {
      var cartTotal = 0;
      const cartItems = this.props.cartItems.map((item) => {
        cartTotal += item.productTotal;
        return <CartRow key={item._id} item={item} removeFromCart={this.props.removeFromCart} />
      });

      return (
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
            {cartItems}
            <tr>
              <td></td>
              <td></td>
              <td><h4>TOTAL : </h4></td>
              <td><h4>Php {cartTotal.toFixed(2)}</h4></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      );
  }
}

export default CartTable;

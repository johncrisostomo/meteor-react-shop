import React from 'react';

class CartRow extends React.Component {
  handleRemove(e) {
    e.preventDefault();
    this.props.removeFromCart(this.props.item._id);
  }

  handlePlus(e) {
    e.preventDefault();
    this.refs.quantity.value = Number(this.refs.quantity.value) + 1;
    this.props.addQuantity(this.props.item._id, Number(this.refs.quantity.value));
  }

  handleMinus(e) {
    e.preventDefault();
    if (this.refs.quantity.value == 1) {
      return;
    }

    this.refs.quantity.value = Number(this.refs.quantity.value) - 1;
    this.props.subtractQuantity(this.props.item._id, Number(this.refs.quantity.value));
  }

  render() {
    return (
      <tr>
        <td>
          <img src={this.props.item.productImage} style={{"height":100, "weight":100}} />
        </td>
        <td>
          {this.props.item.productName}
        </td>
        <td>
          {this.props.item.productQty}
        </td>
        <td>
          Php {this.props.item.productTotal.toFixed(2)}
        </td>
        <td>
          <a href="#" onClick={this.handleRemove.bind(this)}>
            <span  className="glyphicon glyphicon-remove"></span>
          </a>
        </td>
      </tr>
    );
  }
}

export default CartRow;

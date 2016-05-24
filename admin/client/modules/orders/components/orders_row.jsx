import React from 'react';

class OrdersRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isUpdating: false };
    this.orderId = this.props.order._id;
  }

  handleSave(e) {
    e.preventDefault();
    this.props.update(this.orderId);
    this.status = 'Shipped';
    this.setState({isUpdating: false});
  }

  handleUpdate(e) {
    e.preventDefault();
    this.setState({isUpdating: true});
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({isUpdating: false});
  }

  getId() {
    const url = '/orders/' + this.orderId;
    return <td><a href={url}>{this.orderId}</a></td>;
  }

  getStatus() {
    const status = this.props.order.shipped ? 'Shipped' : 'Pending';
    if (this.state.isUpdating) {
      return (
        <td>
         <select>
          <option>Pending</option>
          <option>Shipped</option>
         </select>
        </td>
      );
    }

    return <td>{status}</td>;
  }

  getFirstButton() {
    const status = this.props.order.shipped ? 'Shipped' : 'Pending';
    if (this.state.isUpdating) {
      return <td><a href="#" onClick={this.handleSave.bind(this)}>Save</a></td>;
    }
    if (this.status === 'Shipped') {
      return <td><i>Transaction complete!</i></td>
    }
    return <td><a href="#" onClick={this.handleUpdate.bind(this)}>Update</a></td>;
  }

  getSecondButton() {
    if (this.state.isUpdating) {
      return <td><a href="#" onClick={this.handleCancel.bind(this)}>Cancel</a></td>;
    }

    return <td></td>;
  }

  render() {
    return (
      <tr>
        {this.getId()}
        {this.getStatus()}
        {this.getFirstButton()}
        {this.getSecondButton()}
      </tr>
    );
  }
}

export default OrdersRow;

import React from 'react';

class OrdersRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isUpdating: false };
  }

  getId() {
    const url = '/orders/' + this.props.order._id;
    return <td><a href={url}>{this.props.order._id}</a></td>;
  }

  getStatus() {
    const status = this.props.status ? 'Shipped' : 'Pending';
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
    if (this.state.isUpdating) {
      return <td><a href="#">Save</a></td>;
    }

    return <td><a href="#">Update</a></td>;
  }
  
  getSecondButton() {
    if (this.state.isUpdating) {
      return <td><a href="#">Cancel</a></td>; 
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

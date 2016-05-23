import React from 'react';
import OrdersRow from './orders_row.jsx';

class OrdersTable extends React.Component {
  render() {
  const rows = this.props.orders.map((order) => {
    console.log(order);
    return <OrdersRow key={order._id} order={order} />;
  });
    return (
      <div>
        <table className="table table-striped">
          <tbody>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Actions</th>
            <th></th>
          </tr>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OrdersTable;

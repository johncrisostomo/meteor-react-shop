import React from 'react';
import OrdersTable from './orders_table.jsx';

class OrdersList extends React.Component {
  render() {
    return (
     <div>
      <h1>Showing all orders: </h1>
      <OrdersTable orders={this.props.orders} />
     </div>
    );
  }
}
export default OrdersList;

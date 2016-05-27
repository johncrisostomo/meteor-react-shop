import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import OrdersView from '../components/orders_view.jsx';

export const composer = ({context, orderId}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('order', orderId).ready()) {
    const order= Collections.Orders.find({_id:orderId}).fetch();

    onData(null, {order});
  }
};

export const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(OrdersView);

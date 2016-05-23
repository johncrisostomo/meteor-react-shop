import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import OrdersView from '../components/orders_view.jsx';

export const composer = ({context, orderId}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('orders', orderId)) {
    const post = Collections.Orders.findOne();
    onData(null, {post});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(OrdersView);

import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import OrdersView from '../components/orders_view.jsx';

export const composer = ({context, orderId}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('order', orderId).ready()) {
    console.log(orderId);
    var order= Collections.Orders.find({_id:orderId}).fetch();
    
    onData(null, {order});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(OrdersView);

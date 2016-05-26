import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import CartView from '../components/cart_view.jsx';

export const composer = ({context}, onData) => {
  const {LocalCollections} = context();
  const cartItems = LocalCollections.Cart.find().fetch();
  const itemCount = cartItems.length;

  onData(null, {cartItems, itemCount});
};

export const depsMapper = (context, actions) => ({
  removeFromCart: actions.cart.removeFromCart,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CartView);

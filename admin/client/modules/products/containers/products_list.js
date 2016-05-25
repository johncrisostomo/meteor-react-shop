import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ProductsList from '../components/products_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('categoryNames').ready() && Meteor.subscribe('products').ready()) {
    const categories = Collections.Categories.find().fetch();
    const products = Collections.Products.find().fetch();
    onData(null, {categories, products});
  }
};

export const depsMapper = (context, actions) => ({
  productsAdd: actions.products.productsAdd,
  productsUpdate: actions.products.productsUpdate,
  productsDelete: actions.products.productsDelete,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProductsList);

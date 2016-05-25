import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import MainWrapper from '../components/main_wrapper.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('products').ready() && Meteor.subscribe('categories').ready()) {
    const categories = Collections.Categories.find().fetch();
    const products = Collections.Products.find().fetch();
    onData(null, {categories, products});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MainWrapper);

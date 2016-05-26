import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import MainWrapper from '../components/main_wrapper.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  if (Meteor.subscribe('products', LocalState.get('searchFilter')).ready()
    && Meteor.subscribe('categories').ready()) {
    const categories = Collections.Categories.find().fetch();
    const products = Collections.Products.find().fetch();
    onData(null, {categories, products});
  }
};

export const depsMapper = (context, actions) => ({
  addToCart: actions.addToCart.addToCart,
  setSearchString: actions.search.setSearchString,
  clearSearchString: actions.search.clearSearchString,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MainWrapper);

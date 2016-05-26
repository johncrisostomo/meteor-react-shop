import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import CategoriesList from '../components/categories_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if(Meteor.subscribe('categories').ready()) {
    const categories = Collections.Categories.find().fetch();
    onData(null, {categories});
  }
};

export const depsMapper = (context, actions) => ({
  categoriesAdd: actions.categories.categoriesAdd,
  categoriesUpdate: actions.categories.categoriesUpdate,
  categoriesDelete: actions.categories.categoriesDelete,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CategoriesList);

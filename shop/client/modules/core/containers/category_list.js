import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import CategoryList from '../components/category_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('categories').ready()) {
    const categories = Collections.Categories.find().fetch();
    onData(null, {categories});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CategoryList);

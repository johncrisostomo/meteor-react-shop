import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import {authComposer} from 'meteor-auth';
import Authwrapper from '../components/authwrapper.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  
  Meteor.subscribe('accounts.currentUser').ready();
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(authComposer),
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Authwrapper);

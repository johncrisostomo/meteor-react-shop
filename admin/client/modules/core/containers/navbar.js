import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Navbar from '../components/navbar.jsx';

export const composer = ({context}, onData) => {
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  logout: actions.navbar.logout,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Navbar);

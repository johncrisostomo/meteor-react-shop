import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Login from '../components/login.jsx';

export const composer = ({context}, onData) => {
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  login: actions.login.login,
  clearErrors: actions.login.clearErrors,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);

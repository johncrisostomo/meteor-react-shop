export default {
  login({Meteor, FlowRouter}, email, password) {
    Meteor.loginWithPassword(email, password);
    FlowRouter.go('/');
  },
}

export default {
  login({Meteor, LocalState, FlowRouter}, email, password) {
    if (!email) {
      
    }

    if (!password) {
      
    }
    console.log(email + ' ' + password); 
    Meteor.loginWithPassword(email, password);
    FlowRouter.go('/');
  },

  clearErrors({LocalState}) {
  }
}

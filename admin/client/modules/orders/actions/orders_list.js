export default {
  update({Meteor}, orderId) {
    // call method here
    console.log('received action from ' + orderId);
    Meteor.call('ordersUpdate', orderId);
  }
}

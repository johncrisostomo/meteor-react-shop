export default {
  update({Meteor}, orderId) {
    Meteor.call('ordersUpdate', orderId);
  },
}

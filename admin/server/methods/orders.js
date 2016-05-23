import {Orders} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function() {
  Meteor.methods({
    'ordersUpdate'(orderId) {
      const order = Orders.findOne({_id:orderId});
      console.log('method call received from ' + orderId);
      console.log(order);

      Orders.update({_id:orderId}, {$set: { shipped: true}});

      this.unblock();

      Email.send({
        to: order.email,
        from: 'shipping@welcomeshop.com',
        subject: `Order ${orderId} successfully shipped!`,
        text: 'Dear ' + order.name +', ' + '\nYour order has successfully shipped!'
      });
    }
  });
}

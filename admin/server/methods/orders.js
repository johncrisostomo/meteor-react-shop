import {Orders} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function() {
  Meteor.methods({
    'ordersUpdate'(orderId) {
      check(orderId, String);
      const order = Orders.findOne({_id:orderId});

      Orders.update({_id:orderId}, {$set: { shipped: true}});

      this.unblock();

      Email.send({
        to: order.email,
        from: 'jd@snapzio.com',
        subject: `Order ${orderId} successfully shipped!`,
        text: 'Dear ' + order.name +', ' + '\nYour order has successfully shipped!',
      });
    },
  });
}

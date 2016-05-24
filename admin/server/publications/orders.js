import {Orders} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('orders', function () {
    return Orders.find();
  });
  Meteor.publish('order', function(orderId) {
    return Orders.find({_id: orderId});
  });
}

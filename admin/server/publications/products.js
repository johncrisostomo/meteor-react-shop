import {Products} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('products', function () {
    return Products.find();
  });
}

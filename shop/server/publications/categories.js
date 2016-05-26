import {Categories} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('categories', function () {
    return Categories.find();
  });
}

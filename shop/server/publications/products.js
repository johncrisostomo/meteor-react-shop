import {Products} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('products', function (searchString) {
    check(searchString, String);
    if (!searchString) {
      return Products.find();
    }

    return Products.find(
      { $text: {$search: searchString} },
      {
        fields: {
          score: { $meta: "textScore" },
        },
        sort: {
          score: { $meta: "textScore" },
        },
      }
    );
  });
}

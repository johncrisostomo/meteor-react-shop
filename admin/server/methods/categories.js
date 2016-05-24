import {Categories} from '/lib/collections';
import {Images} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'categoriesAdd'(name, image_id, image_url) {
      check(name, String);
      check(image_id, String);
      check(image_url, String);

      Categories.insert({name, image_url, image_id});
    }
  });

  Meteor.methods({
    'categoriesUpdate'(categoryId, imageId, oldImageId, name, image_url) {
      check(categoryId, String);
      check(name, String);
      check(image_url, String);
      check(imageId, String);

      if (oldImageId) {
        check(oldImageId, String);
        Images.remove(oldImageId);
      }

      Categories.update({_id: categoryId}, 
        { 
          $set: 
            {
              name: name, 
              image_id: imageId,
              image_url: image_url
            }
        });
    }
  });

  Meteor.methods({
    'categoriesDelete'(categoryId, imageId) {
      check(categoryId, String);
      if (imageId) {
        check(imageId, String);
        Images.remove(imageId);
      }
      Categories.remove(categoryId);
    }
  });
}

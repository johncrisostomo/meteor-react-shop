import {Products} from '/lib/collections';
import {Images} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function() {
  Meteor.methods({
    'productsAdd'(productName, productDescription,
      productCategory, productPrice, image_id, image_path) {
        check(productName, String);
        check(productDescription, String);
        check(productCategory, String);
        check(productPrice, Number);
        check(image_id, String);
        check(image_path, String);

        Products.insert({
          name: productName,
          description: productDescription,
          category: productCategory,
          price: productPrice,
          image_id: image_id,
          image_url: image_path,
        });
    }
  });

  Meteor.methods({
    'productsDelete'(productId, imageId) {
      check(productId, String);
      check(imageId, String);

      Products.remove(productId);
      Images.remove(imageId);
    }
  });
}

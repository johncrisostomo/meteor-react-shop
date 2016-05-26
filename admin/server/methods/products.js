import {Products, Images} from '/lib/collections';
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
    },
  });

  Meteor.methods({
    'productsUpdate'(productId, productName, productDescription, productCategory,
    productPrice, oldImageId, imageId, image_url) {
      check(productId, String);
      check(productName, String);
      check(productDescription, String);
      check(productCategory, String);
      check(productPrice, Number);
      check(oldImageId, String);
      check(imageId, String);
      check(image_url, String);

      Images.remove(oldImageId);

      Products.update({_id: productId},
        {
          $set:
            {
              name: productName,
              description: productDescription,
              category: productCategory,
              price: productPrice,
              image_id: imageId,
              image_url: image_url,
            },
        });
    },
  });

  Meteor.methods({
    'productsDelete'(productId, imageId) {
      check(productId, String);
      check(imageId, String);

      Products.remove(productId);
      Images.remove(imageId);
    },
  });
}

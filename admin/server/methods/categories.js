import {Categories, Products, Images} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'categoriesAdd'(name, image_id, image_url) {
      check(name, String);
      check(image_id, String);
      check(image_url, String);

      Categories.insert({name, image_url, image_id});
    },
  });

  Meteor.methods({
    'categoriesUpdate'(categoryId, imageId, oldImageId, name, image_url) {
      check(categoryId, String);
      check(name, String);
      check(image_url, String);
      check(imageId, String);
      check(oldImageId, String);

      Images.remove(oldImageId);

      // old cat name to  handle products that have the old category
      const oldCategoryName = Categories.findOne({_id: categoryId}).name;

      Categories.update({_id: categoryId}, 
        { 
          $set: 
            {
              name: name, 
              image_id: imageId,
              image_url: image_url,
            },
        });

      Products.update({category: oldCategoryName}, 
                      { $set: { category: name}}, 
                      {multi: true});
    },
  });

  Meteor.methods({
    'categoriesDelete'(categoryId, imageId) {
      check(categoryId, String);
      check(imageId, String);
        
        Images.remove(imageId);

      const oldCategoryName = Categories.findOne({_id: categoryId}).name;

      Products.update({category: oldCategoryName}, 
                      { $set: { category: 'Uncategorized'}}, 
                      {multi: true});

      Categories.remove(categoryId);
    },
  });
}

export default {
  productsAdd({Meteor, Collections}, productName, productDescription, productCategory,
    productPrice, imageFile) {
      if (imageFile) {
        const fsFile = new FS.File(imageFile);
        Collections.Images.insert(fsFile, function(err, res) {
          if (!err) {
            var image_path = Meteor.absoluteUrl() + 'cfs/files/Images/' + res._id;
            Meteor.call('productsAdd', productName, productDescription,
              productCategory, productPrice, res._id, image_path);
          }
        });
      }
  },

  productsDelete({Meteor}, productId, imageId) {
    Meteor.call('productsDelete', productId, imageId);
  }
}

export default {
  categoriesAdd({Meteor, Collections}, category, file) {
    if (file) {
      const fsFile = new FS.File(file);
      Collections.Images.insert(fsFile, function(err, res) {
        if (!err) {
          var image_path = Meteor.absoluteUrl() + 'cfs/files/Images/' + res._id; 
          Meteor.call('categoriesAdd', category, res._id, image_path);
        }
      });
    }
  },
  
  categoriesUpdate({Meteor, Collections}, categoryId, oldImageId, name, file) {
    const fsFile = new FS.File(file);
    Collections.Images.insert(fsFile, function(err, res) {
      if (!err) {
        var image_path = Meteor.absoluteUrl() + 'cfs/files/Images/' + res._id;
        Meteor.call('categoriesUpdate', categoryId, res._id, oldImageId, name, image_path);
      }
    });
  },

  categoriesDelete({Meteor}, categoryId, imageId) {
    Meteor.call('categoriesDelete', categoryId, imageId);
  }
}

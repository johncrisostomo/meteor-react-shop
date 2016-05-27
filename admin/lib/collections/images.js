import {FS} from 'meteor/cfs:base-package';

const Images = new FS.Collection('Images', {
  stores: [new FS.Store.GridFS('Images')],
});

Images.allow({
  download: function() {
    return true;
  },
  insert: function(userId) {
    return !!userId;
  },
  update: function(userId) {
    return !!userId;
  },
  remove: function(userId) {
    return !!userId;
  },
});
export default Images;

import {FS} from 'meteor/cfs:base-package';

const Images = new FS.Collection('Images', {
  stores: [new FS.Store.GridFS('Images')],
});

export default Images;

import {Mongo} from 'meteor/mongo';


const Images = new FS.Collection('Images', {
  stores: [new FS.Store.GridFS('Images')]
});

export default Images;

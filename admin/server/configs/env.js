import {Meteor} from 'meteor/meteor';

export default function() {
  Meteor.startup(function() {
    process.env.MAIL_URL='smtp://jd%40snapzio.com:2sagara7@mail.snapzio.com:587';
  });
}

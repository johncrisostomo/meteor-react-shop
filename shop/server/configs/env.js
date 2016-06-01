import {Meteor} from 'meteor/meteor';

export default function() {
  Meteor.startup(function() {
    const {address, password, smtp, port} = Meteor.settings.email; 

    process.env.MAIL_URL=`smtp://${address}:${password}@${smtp}:${port}`;
  });
}

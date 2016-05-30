import {Meteor} from 'meteor/meteor';

export default function() {
  Meteor.startup(function() {
    const {email, password, server, port} = Meteor.settings.email; 

    process.env.MAIL_URL=`smtp://${email}:${password}@${server}:${port}`;
  });
}

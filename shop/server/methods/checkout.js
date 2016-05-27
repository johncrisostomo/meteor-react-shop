import {Orders} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'checkout'(products, total, name, address, email) {
      check(products, Array);
      check(total, Number);
      check(name, String);
      check(address, String);
      check(email, String);

      const orderId = Orders.insert({
        products,
        total,
        name,
        address,
        email,
        shipped: false,
      });

      Email.send({
        to: email,
        from: 'jd@snapzio.com',
        subject: 'Order confirmation',
        text: 'Dear ' + name +', ' +
          `\nOrder ID ${orderId} is confirmed` +
          '\nThank you for placing an order.\n' +
          'Please wait for the shipping email to be sent shortly',
      });
    },
  });
}

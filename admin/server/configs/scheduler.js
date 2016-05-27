import Orders from '../../lib/collections/orders.js';
import {SyncedCron} from 'meteor/percolate:synced-cron';

export default function() {
  SyncedCron.add({
    name: 'Generate daily email',
    schedule (parser) {
      return parser.text('at 11:00 pm');
    },
    job() {
      var today = new Date();
      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      var start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      var end = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate());

      const orders = Orders.find({
        createdAt: {
          $lte: new Date(end),
          $gte: new Date(start),
        },
      }).fetch();

      var sales, totalSales = 0;
      if (orders) {
        sales = orders.map(order => order.total)
        if (sales.length > 1 ) {
          totalSales = sales.reduce((prev, curr) => prev + curr);
        } else {
          totalSales = sales[0];
        }
      }

      Email.send({
        to: 'jd@snapzio.com',
        from: 'jd@snapzio.com',
        subject: 'Daily Sales Report',
        text: `As of this time, you already have Php ${totalSales.toFixed(2)} of sales`,
      })
    },
  });

  SyncedCron.start();
}

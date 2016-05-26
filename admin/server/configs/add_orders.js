import Orders from '../../lib/collections/orders.js';

export default function() {
  if (!Orders.findOne()) {
    Orders.insert({
      products: [
        {
          name: 'iPhone',
          price: 30,
          qty: 2,
          category: 'Electronics',
        },
        {
          name: 'Sadboys Large',
          price: 15,
          qty: 1,
          category: 'Fashion',
        },
      ],
      total: 75,
      name: 'Erick Madduma',
      address: 'Snapzio Office',
      email: 'erick@snapzio.com',
      shipped: false,
    });
    Orders.insert({
      products: [
        {
          name: 'Macbook Air 13-inches',
          price: 1000,
          qty: 1,
          category: 'Electronics',
        },
      ],
      total: 1000,
      name: 'John Crisostomo',
      address: 'Snapzio Office',
      email: 'jd@snapzio.com',
      shipped: false,
    });
  }
}

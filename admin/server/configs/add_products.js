import Products from '../../lib/collections/products';

export default function() {
   if (!Products.findOne()) {
     Products.insert({
       name: 'Macbook Air 13-inches',
       description: 'A slim ultraportable from Apple',
       price: 1000,
       image_url: 'http://www.garethjmsaunders.co.uk/blueprint/placeholders/gif/extras/icons/64x64.gif',
       category: 'Electronics',
       image_id: '1234hjkhdaf798',
     });

     Products.insert({
       name: 'iPhone',
       description: 'An expensive phone from Apple',
       price: 30,
       image_url: 'http://www.garethjmsaunders.co.uk/blueprint/placeholders/gif/extras/icons/64x64.gif',
       category: 'Electronics',
       image_id: 'poiasbfjhlwre123',
     });

     Products.insert({
       name: 'Sadboys Large',
       description: 'A Large Sadboys T-shirt',
       price: 15,
       image_url: 'http://www.garethjmsaunders.co.uk/blueprint/placeholders/gif/extras/icons/64x64.gif',
       category: 'Fashion',
       image_id: 'nbmb41ioui4321',
     });
   }
}

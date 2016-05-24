import Products from '../../lib/collections/products';

export default function() {
   if (!Products.findOne()) {
     Products.insert({
       name: 'Macbook Air 13-inches',
       description: 'A slim ultraportable from Apple',
       price: 1000,
       image_url: 'http://www.garethjmsaunders.co.uk/blueprint/placeholders/gif/extras/icons/64x64.gif',
       category: 'Electronics'
     });
     console.log('Inserted Macbook Air');


     Products.insert({
       name: 'iPhone',
       description: 'An expensive phone from Apple',
       price: 30,
       image_url: 'http://www.garethjmsaunders.co.uk/blueprint/placeholders/gif/extras/icons/64x64.gif',
       category: 'Electronics'
     });
     console.log('Inserted iPhone!');


     Products.insert({
       name: 'Sadboys Large',
       description: 'A Large Sadboys T-shirt',
       price: 15,
       image_url: 'http://www.garethjmsaunders.co.uk/blueprint/placeholders/gif/extras/icons/64x64.gif',
       category: 'Fashion'
     });
     console.log('Inserted T-shirt!');
   }
}

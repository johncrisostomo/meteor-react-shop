import Categories from '../../lib/collections/categories';

export default function() {
   if (!Categories.findOne()) {
     Categories.insert({
       name: 'Fashion', 
       description: 'All fashion items',
       image_url: 'http://www.garethjmsaunders.co.uk/blueprint/placeholders/gif/extras/icons/64x64.gif'
     });
     console.log('Inserted Fashion category!');

     Categories.insert({
       name: 'Electronics',
       description: 'All electronic items',
       image_url: 'http://www.garethjmsaunders.co.uk/blueprint/placeholders/gif/extras/icons/64x64.gif'
     });
     console.log('Inserted Electronics category!');
   }
}

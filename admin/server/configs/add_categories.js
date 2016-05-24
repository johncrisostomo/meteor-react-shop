import Categories from '../../lib/collections/categories';

export default function() {
   if (!Categories.findOne()) {
     Categories.insert({name: 'Fashion', description: 'All fashion items'});
     console.log('Inserted Fashion category!');
     Categories.insert({name: 'Electronics', description: 'All electronic items'});
     console.log('Inserted Electronics category!');
   }
}

import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import ProductsList from './containers/products_list.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

   FlowRouter.route('/products', {
     name: 'productsList',
     action() {
       mount(MainLayoutCtx, {
         content: () => (<ProductsList />)
       });
     }
   });
}

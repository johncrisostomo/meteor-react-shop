import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import OrdersView from './containers/orders_view.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/orders/:id', {
    name: 'ordersView',
    action(params) {
      mount(MainLayoutCtx, {
        content: () => (<OrdersView orderId={params._id} />)
      });
    }
  });
}

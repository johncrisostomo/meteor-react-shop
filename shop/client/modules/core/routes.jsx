import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import OrdersView from './containers/orders_view.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />),
      });
    },
  });

  FlowRouter.route('/orders/:id', {
    name: 'ordersView',
    action(params) {
      mount(MainLayoutCtx, {
        content: () => (<OrdersView orderId={params.id} />),
      });
    },
  });
}

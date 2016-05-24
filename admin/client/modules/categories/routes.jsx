import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import CategoriesList from './containers/categories_list.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/categories', {
    name: 'categoriesList',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CategoriesList />)
      });
    }
  });
}

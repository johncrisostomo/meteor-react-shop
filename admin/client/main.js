import {createApp} from 'mantra-core';
import initContext from './configs/context';
import {DocHead} from 'meteor/kadira:dochead';

// modules
import coreModule from './modules/core';
import ordersModule from './modules/orders';
import productsModule from './modules/products';
import categoriesModule from './modules/categories';

DocHead.setTitle('Welcome Shop Admin');

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(ordersModule);
app.loadModule(productsModule);
app.loadModule(categoriesModule);
app.init();

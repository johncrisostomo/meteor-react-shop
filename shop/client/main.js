import {createApp} from 'mantra-core';
import initContext from './configs/context';
import {DocHead} from 'meteor/kadira:dochead';

// modules
import coreModule from './modules/core';
import cartModule from './modules/cart';

DocHead.setTitle('Welcome Shop');

// init context
const context = initContext();

//sets initial search filter to ''
context.LocalState.set('searchFilter', '');

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(cartModule);
app.init();

import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import cartModule from './modules/cart';

// init context
const context = initContext();

//sets initial search filter to ''
context.LocalState.set('searchFilter', '');

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(cartModule);
app.init();

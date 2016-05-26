import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';

// init context
const context = initContext();
context.LocalState.set('searchFilter', '');

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();

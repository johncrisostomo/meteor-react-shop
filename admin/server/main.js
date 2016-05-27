import publications from './publications';
import methods from './methods';
import addAdmin from './configs/add_admin.js';
import addTestOrders from './configs/add_orders.js';
import addCategories from './configs/add_categories.js';
import addProducts from './configs/add_products.js';
import envInit from './configs/env.js';

envInit();
publications();
methods();
addAdmin();
addTestOrders();
addCategories();
addProducts();

import dashboardRoutes from 'app/modules/Dashboard/routes';
import productRoutes from 'app/modules/Products/routes';

export const rootRoutes = [...dashboardRoutes, ...productRoutes];

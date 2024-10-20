import {
  RouterProvider,
  createBrowserRouter,
  // Navigate,
} from 'react-router-dom';

import routeNames from './routeNames';
import { Login, User, UserDetails } from '../views/pages';
import { DashboardWrapper } from '../views/wrappers';

function Router() {
  const router = createBrowserRouter([
    {
      path: routeNames.index,
      element: <Login />,
    },
    {
      path: routeNames.users,
      element: <DashboardWrapper />,
      children: [
        {
          index: true,
          element: <User />
        },
        {
          path: `${routeNames.users}/:id`,
          element: <UserDetails />
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default Router;

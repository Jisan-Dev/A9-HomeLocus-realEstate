import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import ErrorPage from '../pages/error-page';
import PropertyDetails from '../pages/property-details/PropertyDetails';
import PrivateRoute from './PrivateRoute';
import UpdateProfile from '../pages/update-profile/UpdateProfile';
import Wishlist from '../pages/wishlist/Wishlist';
import UserProfile from '../pages/user-profile/UserProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('/properties.json'),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/update-profile',
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: '/property-details/:id',
        element: (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
        loader: () => fetch('/properties.json'),
      },
      {
        path: '/wishlist',
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
        loader: () => fetch('/properties.json'),
      },
      {
        path: '/user-profile',
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

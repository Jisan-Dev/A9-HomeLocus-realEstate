import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import ErrorPage from '../pages/error-page';
import PropertyDetails from '../pages/property-details/PropertyDetails';

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
        path: '/property-details/:id',
        element: <PropertyDetails />,
        loader: () => fetch('/properties.json'),
      },
    ],
  },
]);

export default router;

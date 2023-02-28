import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminLayout from '../components/Layout/AdminLayout';
import { InfoPage } from '../pages/InfoPage';
import { HousesList } from '../pages/HousesList';
import { ActivitiesList } from '../pages/ActivitiesList';
import { HouseForm } from '../components/HouseForm/HouseForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      { index: true, element: <InfoPage /> },
      { path: 'houseslist/*', element: <HouseForm />},
      { path: 'activitieslist', element: <ActivitiesList /> },
    ],
  },
]);

const Provider = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default Provider;

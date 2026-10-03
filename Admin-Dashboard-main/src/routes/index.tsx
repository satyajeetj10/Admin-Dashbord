import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '@/layouts/DashboardLayout';

// Dashboard Pages
import Overview from '@/pages/dashboard/Overview';
import Analytics from '@/pages/dashboard/Analytics';
import Sales from '@/pages/dashboard/Sales';
import Customers from '@/pages/dashboard/Customers';
import Users from '@/pages/dashboard/Users';
import Orders from '@/pages/dashboard/Orders';
import Products from '@/pages/dashboard/Products';
import Messages from '@/pages/dashboard/Messages';
import Notifications from '@/pages/dashboard/Notifications';
import Calendar from '@/pages/dashboard/Calendar';
import Profile from '@/pages/dashboard/Profile';
import Settings from '@/pages/dashboard/Settings';
import HelpCenter from '@/pages/dashboard/HelpCenter';
import Error404 from '@/pages/Error404';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Overview /> },
      { path: 'analytics', element: <Analytics /> },
      { path: 'sales', element: <Sales /> },
      { path: 'customers', element: <Customers /> },
      { path: 'users', element: <Users /> },
      { path: 'orders', element: <Orders /> },
      { path: 'products', element: <Products /> },
      { path: 'messages', element: <Messages /> },
      { path: 'notifications', element: <Notifications /> },
      { path: 'calendar', element: <Calendar /> },
      { path: 'profile', element: <Profile /> },
      { path: 'settings', element: <Settings /> },
      { path: 'help', element: <HelpCenter /> },
    ],
  },
  {
    path: '*',
    element: <Error404 />,
  },
]);

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Errorpage from './Pages/Errorpage/Errorpage';
import AllCategories from './Pages/AllCategories/AllCategories';
import Spinner from './Offer/shared/Spinner/Spinner';
import { Toaster } from 'react-hot-toast';
import SinglePhoneCategory from './Pages/SignglePhoneCategory/SinglePhoneCategory';
import PrivateRoute from './Offer/shared/PrivateRoute/PrivateRoute';
import DashboardLayout from './Offer/shared/Dashboard/DashboardLayout/DashboardLayout';
import Dashboard from './Offer/shared/Dashboard/Dashboard/Dashboard';
import MyOrders from './Pages/MyOrder/MyOrders';
import AllUsers from './Offer/shared/Dashboard/AllUsers/AllUsers';
import AddProducts from './Offer/shared/Dashboard/AddProducts/AddProducts';
import AdminRoute from './Offer/shared/PrivateRoute/AdminRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://server-assignment-12-omega.vercel.app/categories')
        },
        {
          path: '/allcategories',
          element: <PrivateRoute><AllCategories></AllCategories></PrivateRoute>,

        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: "/categories/:id",
          loader: ({ params }) =>
            fetch(`https://server-assignment-12-omega.vercel.app/categories/${params.id}`),
          element: <SinglePhoneCategory></SinglePhoneCategory>,
        },

      ]
    },
    {
      path: '*',
      element: <Errorpage></Errorpage>
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children: [
        {
          path: '/dashboard',
          element: <MyOrders></MyOrders>
        },
        {
          path : '/dashboard/allusers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path : '/dashboard/addproducts',
          element: <AdminRoute><AddProducts></AddProducts></AdminRoute>
        },
      ]
    }
  ])
  return (
    <div >
      <RouterProvider fallbackElement={<Spinner></Spinner>} router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

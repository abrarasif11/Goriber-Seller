import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Errorpage from './Pages/Errorpage/Errorpage';
import AllCategories from './Pages/AllCategories/AllCategories';
import Spinner from './Offer/shared/Spinner/Spinner';

function App() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/categories')
          },
          {
              path: '/allcategories',
              element:<AllCategories></AllCategories>,
              
          },
          {
            path: '/blog',
            element : <Blog></Blog>
          },
          {
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/signup',
            element : <SignUp></SignUp>
          }
        ]
      },
      {
       path: '*',
       element: <Errorpage></Errorpage>
      }
    ])
  return (
    <div >
     <RouterProvider fallbackElement={<Spinner></Spinner>}  router={router}></RouterProvider>  
    </div>
  );
}

export default App;

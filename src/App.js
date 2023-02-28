
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main/Main';
import LogIn from './Pages/LogIn/LogIn';
import SingUp from './Pages/SingUp/SingUp';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children:[
        // { path: '/', element: <Home></Home> },
        { path: '/login', element: <LogIn></LogIn> },
        { path: '/singup', element: <SingUp></SingUp> },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;

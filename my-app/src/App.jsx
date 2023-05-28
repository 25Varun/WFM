import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './App.css';

import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
const Layout = () =>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    
    </>

    
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
    ]
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/login",
    element:<Login/>
  }
]);

function App() {
  return <div className="App">
    <div className="container">
    <RouterProvider router={router} />
    </div>
  </div>;
}

export default App;

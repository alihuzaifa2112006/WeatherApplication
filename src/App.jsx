import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import About from './Components/About';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Application from './Components/Application';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Outlet /> 
        </>
      ),
      children: [
        { path: '/', element: <LandingPage /> },
        { path: '/about', element: <About /> },
        { path: '/application', element: <Application /> }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

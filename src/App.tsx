import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import ContextPage from './pages/ContextPage';
import ReduxPage from './pages/ReduxPage';
import StatePage from './pages/StatePage';
import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <StatePage /> },
      { path: '/context', element: <ContextPage /> },
      { path: '/redux', element: <ReduxPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

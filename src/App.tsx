import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import ContextPage from './Context/Pages/ContextPage.tsx';
import ReduxPage from  "../src/Redux/Pages/ReduxPage.tsx"
import StatePage from './State/Pages/StatePage';
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

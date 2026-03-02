import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation.tsx';

function RootLayout() {
  return (
    <div>
      <Navigation />
      <hr />
      <Outlet />
    </div>
  );
}

export default RootLayout;

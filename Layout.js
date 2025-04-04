import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <div style={{ paddingBottom: '60px' }}>
        <Outlet />
      </div>
      <nav style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        background: '#eee',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 0'
      }}>
        <Link to="/" style={{ fontWeight: location.pathname === '/' ? 'bold' : 'normal' }}>Jobs</Link>
        <Link to="/bookmarks" style={{ fontWeight: location.pathname === '/bookmarks' ? 'bold' : 'normal' }}>Bookmarks</Link>
      </nav>
    </>
  );
}


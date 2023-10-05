import { Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  return (
    <div>
      <h1>Movie Details</h1>
      <Outlet />
    </div>
  );
};

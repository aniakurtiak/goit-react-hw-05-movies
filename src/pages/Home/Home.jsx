import { TrandingList } from 'components/TrandingList/TrandingList';
import { useEffect, useState } from 'react';
import { fetchTranding } from 'services/api';

export default function Home() {
  const [tranding, setTranding] = useState([]);

  useEffect(() => {
    async function getTrandingMovies() {
      try {
        const trandingMovies = await fetchTranding();
        setTranding(trandingMovies);
      } catch (error) {
        console.log(error);
      }
    }
    getTrandingMovies();
  }, []);

  return (
    <div>
      <h1>Tranding today</h1>
      <TrandingList tranding={tranding} />
    </div>
  );
}

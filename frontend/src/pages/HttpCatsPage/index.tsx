import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Media from '../../components/Media';
import httpCatsApi from '../../services/httpCatsApi';

const HttpCatsPage = () => {
  const baseUrl = 'https://http.cat/';
  const [mediaUrl, setMediaUrl] = useState('');
  const [search, setSearch] = useState(200);
  const location = useLocation();

  useEffect(() => {
    setMediaUrl(baseUrl + search);
    console.log(search);
    return () => {};
  }, [search, location]);

  return (
    <main>
      <input
        type="number"
        onChange={(e) => {
          const value = Number(e.target.value);
          setSearch(value || 404);
        }}
      />
      <Media url={mediaUrl} />
    </main>
  );
};

export default HttpCatsPage;

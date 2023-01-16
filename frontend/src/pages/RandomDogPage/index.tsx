import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Media from '../../components/Media';
import randomDogApi from '../../services/randomDogApi';
import { Text } from '../../styles/Text';

const RandomDogPage = () => {
  const [mediaUrl, setMediaUrl] = useState('');
  const location = useLocation();

  //   if (image.url.endsWith('.mp4') || url.endsWith('.ogg')) {
  //     return <video src={url} controls />;
  //   } else {
  //     return <img src={url} alt="" />;
  //   }
  // };
  useEffect(() => {
    randomDogApi.get('/woof.json').then((res) => setMediaUrl(res.data.url));
    return () => {
      console.log('desmontou');
    };
  }, [location]);

  return (
    <main>
      <Media url={mediaUrl} />
    </main>
  );
};

export default RandomDogPage;

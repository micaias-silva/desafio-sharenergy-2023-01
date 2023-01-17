import { formToJSON } from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Media from '../../components/Media';
import randomDogApi from '../../services/randomDogApi';
import { Container, Flex } from '../../styles/Containers';
import { RefreshButton, StyledRandomDogPage } from './styles';
import refreshIconSvg from '../../assets/refresh-icon.svg';

const RandomDogPage = () => {
  const [mediaUrl, setMediaUrl] = useState('');
  const location = useLocation();

  useEffect(() => {
    randomDogApi.get('/woof.json').then((res) => setMediaUrl(res.data.url));
    return () => {};
  }, [location]);

  return (
    <StyledRandomDogPage>
      <Container>
        <Flex>
          <Media url={mediaUrl} />
          <RefreshButton
            onClick={() =>
              randomDogApi
                .get('/woof.json')
                .then((res) => setMediaUrl(res.data.url))
            }
          >
            <img src={refreshIconSvg} />
          </RefreshButton>
        </Flex>
      </Container>
    </StyledRandomDogPage>
  );
};

export default RandomDogPage;

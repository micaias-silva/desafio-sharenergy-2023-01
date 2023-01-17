import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Media from '../../components/Media';
import httpCatsApi from '../../services/httpCatsApi';
import { Container, Flex } from '../../styles/Containers';
import { Input } from '../../styles/Form';
import { StyledHttpCatsPage } from './styles';

const HttpCatsPage = () => {
  const baseUrl = 'https://http.cat/';
  const [mediaUrl, setMediaUrl] = useState('');
  const [search, setSearch] = useState(200);
  const location = useLocation();

  useEffect(() => {
    setMediaUrl(baseUrl + search);

    return () => {};
  }, [search, location]);

  return (
    <StyledHttpCatsPage>
      <Container>
        <Flex>
          <Input
            placeholder="Search HTTP; Ex.: 200, 404..."
            type="number"
            onChange={(e) => {
              const value = Number(e.target.value);
              setSearch(value || 404);
            }}
          />
          <Media url={mediaUrl} />
        </Flex>
      </Container>
    </StyledHttpCatsPage>
  );
};

export default HttpCatsPage;

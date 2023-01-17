import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserCard from '../../components/UserCard';
import { useQuery } from '../../lib/queryParams';
import { backendApi, PaginatedClienResponse } from '../../services/backendApi';
import { useSelector } from 'react-redux';
import ClientCard from '../../components/ClientCard';
import { Container, PageButtonContainer } from '../../styles/Containers';
import { Input } from '../../styles/Form';
import { StyledBasicButton } from '../../components/Button/styles';

const ClientsPage = () => {
  const query = useQuery();
  const location = useLocation();

  const session = useSelector((state: any) => state.session);

  const [request, setRequest] = useState<PaginatedClienResponse>();
  const [page, setPage] = useState<number>(Number(query.get('page')) || 1);
  const [term, setTerm] = useState<string>(query.get('term') || '');

  useEffect(() => {
    backendApi
      .get(`/clients?page=${page}&term=${term}`, {
        headers: { authorization: 'Bearer ' + session },
      })
      .then((res) => {
        setRequest(res.data);
      });
    return () => {};
  }, [term, page, location]);

  return (
    <Container as="main">
      <Input
        onChange={(e) => {
          const value = e.target.value;
          setTerm(value);
          setPage(1);
        }}
        placeholder="Search Users"
      />
      {request?.docs.map((client) => {
        return <ClientCard key={client.id} {...client} />;
      })}
      <PageButtonContainer>
        {request?.hasPrevPage && (
          <StyledBasicButton onClick={() => setPage(request.prevPage!)}>
            Previous
          </StyledBasicButton>
        )}
        {request?.hasNextPage && (
          <StyledBasicButton onClick={() => setPage(request.nextPage!)}>
            Next
          </StyledBasicButton>
        )}
      </PageButtonContainer>
    </Container>
  );
};

export default ClientsPage;

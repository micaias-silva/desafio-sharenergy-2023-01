import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledBasicButton } from '../../components/Button/styles';
import UserCard from '../../components/UserCard';
import { useQuery } from '../../lib/queryParams';
import { backendApi, PaginatedUserResponse } from '../../services/backendApi';
import { Container, PageButtonContainer } from '../../styles/Containers';
import { Input } from '../../styles/Form';

const UsersPage = () => {
  const query = useQuery();
  const location = useLocation();

  const [request, setRequest] = useState<PaginatedUserResponse>();
  const [page, setPage] = useState<number>(Number(query.get('page')) || 1);
  const [term, setTerm] = useState<string>(query.get('term') || '');

  useEffect(() => {
    backendApi.get(`/users?page=${page}&term=${term}`).then((res) => {
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
      {request?.docs.map((user) => {
        return <UserCard key={user.id} {...user} />;
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

export default UsersPage;

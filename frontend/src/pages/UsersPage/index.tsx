import { useEffect, useState } from 'react';
import UserCard from '../../components/UserCard';
import { useQuery } from '../../lib/queryParams';
import { backendApi, BackendUserResponse } from '../../services/backendApi';

const UsersPage = () => {
  const query = useQuery();

  const [request, setRequest] = useState<BackendUserResponse[]>([]);
  const [page, setPage] = useState<number>(Number(query.get('page')) || 1);
  const [term, setTerm] = useState<string>(Number())
  console.log(page);

  useEffect(() => {
    backendApi
      .get(`/users?page=${page}`)
      .then((res) => setRequest(res.data.docs));
    console.log(request);
  }, []);
  return (
    <main onend>
      {request.map((user) => {
        return <UserCard key={user.id} {...user} />;
      })}
    </main>
  );
};

export default UsersPage;

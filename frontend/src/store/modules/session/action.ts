export const setToken = (token: string, storage: Storage) => {
  storage.setItem('token', token);
  return {
    type: 'SET_TOKEN',
    session: token,
  };
};

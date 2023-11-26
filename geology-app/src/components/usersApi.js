// usersApi.js
const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const addUser = async (user) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  return data;
};

// Users.js
import React, { useState, useEffect } from 'react';
import { getUsers, addUser } from './usersApi';
import { Button } from 'react-bootstrap';
import UserModal from './UserModal';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };

    fetchData();
  }, []);

  const handleAddUser = async () => {
    const addedUser = await addUser(newUser);
    setUsers((prevUsers) => [...prevUsers, addedUser]);
    setNewUser({ name: '', email: '' });
    handleCloseModal();
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Correo electrónico</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Resto de tu código */}
      <Button variant="primary" onClick={handleShowModal}>
        Agregar Usuario
      </Button>

      <UserModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleAddUser={handleAddUser}
        newUser={newUser}
        setNewUser={setNewUser}
      />
    </div>
  );
};

export default Users;

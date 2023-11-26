// UserModal.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const UserModal = ({ showModal, handleCloseModal, handleAddUser, newUser, setNewUser }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Nuevo Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el correo electrónico"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleAddUser}>
          Agregar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;

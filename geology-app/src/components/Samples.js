import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      samples: [
        { id: 1, name: 'Muestra 1', description: 'Descripción de la muestra 1' },
        { id: 2, name: 'Muestra 2', description: 'Descripción de la muestra 2' },
        { id: 3, name: 'Muestra 3', description: 'Descripción de la muestra 3' },
      ],
    };
  }

  handleEdit = (id) => {
    // Implementa la lógica para editar la muestra con el ID proporcionado
    console.log(`Editar muestra con ID: ${id}`);
  };

  handleDelete = (id) => {
    // Implementa la lógica para eliminar la muestra con el ID proporcionado
    console.log(`Eliminar muestra con ID: ${id}`);
  };

  render() {
    return (
      <div className="container mt-4">
        <h2>Muestras</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.samples.map((sample) => (
              <tr key={sample.id}>
                <td>{sample.id}</td>
                <td>{sample.name}</td>
                <td>{sample.description}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => this.handleEdit(sample.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(sample.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Sample;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddSampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      date: '',
      image: null,
    };
  }

  handleChange = (e) => {
    const { name, value, type, files } = e.target;
    this.setState({
      [name]: type === 'file' ? files[0] : value,
    });
  };

  handleAddSample = () => {
    // Implementa la lógica para agregar la muestra con los datos actuales del estado
    console.log('Añadir muestra:', this.state);
  };

  render() {
    return (
      <div className="container mt-4">
        <h2>Agregar Muestra</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Descripción
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Fecha
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Imagen
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              accept="image/*"
              onChange={this.handleChange}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={this.handleAddSample}>
            Agregar Muestra
          </button>
        </form>
      </div>
    );
  }
}

export default AddSampleForm;

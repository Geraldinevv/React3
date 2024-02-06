import React, { useState } from 'react';

const Formulario = ({ onAgregar, mensaje, setMensaje, color, setColor }) =>{
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nombre.trim() ||
      !correo.trim() ||
      !edad.trim() ||
      !cargo.trim() ||
      !telefono.trim()
    ) {
      setMensaje('Por favor, complete todos los campos.');
      setColor('danger');
      return;
    }

    onAgregar({ nombre, correo, edad, cargo, telefono });
    setNombre('');
    setCorreo('');
    setEdad('');
    setCargo('');
    setTelefono('');
    setMensaje('Colaborador agregado exitosamente.');
    setColor('success');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="my-4">Agregar Colaborador</h2>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          placeholder="Ingrese el nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="correo">Correo</label>
        <input
          type="email"
          className="form-control"
          id="correo"
          placeholder="Ingrese el correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="edad">Edad</label>
        <input
          type="number"
          className="form-control"
          id="edad"
          placeholder="Ingrese la edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cargo">Cargo</label>
        <input
          type="text"
          className="form-control"
          id="cargo"
          placeholder="Ingrese el cargo"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="telefono">Teléfono</label>
        <input
          type="tel"
          className="form-control"
          id="telefono"
          placeholder="Ingrese el teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar colaborador
      </button>
    </form>
  );
};

export default Formulario;
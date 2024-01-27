import BaseComponent from 'bootstrap/js/dist/base-component';
import React from 'react';
import { Table } from 'react-bootstrap';
import BaseColaboradores from '../../BaseColaboradores';


export const Listado = ({ Basecolaboradores }) => {
  console.log (Basecolaboradores);
  return (
    <Table style={{texteAlign: 'center'}}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {BaseComponent.length &&
          BaseColaboradores.map((colaborador) => (
          <tr key={colaborador.id}>
            <td>{colaborador.id}</td>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};


export default Listado;
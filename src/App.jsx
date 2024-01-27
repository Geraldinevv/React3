import React, { useState } from 'react';
import BaseColaboradores from './BaseColaboradores'
import Listado from './components/Listado/Listado';
import Formulario from './components/Formulario/Formulario';
import Buscador from './components/Buscador/Buscador'; 

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState('');
  const [color, setColor] = useState('success');

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
    setMensaje('Colaborador agregado exitosamente.');
    setColor('success');
  };

  const buscarColaboradores = (terminoBusqueda) => {
    if (terminoBusqueda) {
      const filteredColaboradores = BaseColaboradores.filter((colaborador) =>
        colaborador.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
      );
      setColaboradores(filteredColaboradores);
    } else {
      setColaboradores(BaseColaboradores);
    }

  };


  return (
    <div className="container">
      <h1 className="my-4">Colaboradores</h1>
      <div className="row">
        <div className="col-md-8">
          <Buscador onBuscar={buscarColaboradores} />
          <Listado colaboradores={colaboradores} />
        </div>
        <div className="col-md-4">
          <Formulario onAgregar={agregarColaborador} mensaje={mensaje} setMensaje={setMensaje} color={color} setColor={setColor} />
        </div>
      </div>
    </div>
  );
};

export default App;

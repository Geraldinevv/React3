import React,{useState}from 'react';

const Buscador = ({ onBuscar }) => {
 const [terminoBusqueda, setTerminoBusqueda] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    onBuscar(terminoBusqueda);
 };

 return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar colaborador"
          value={terminoBusqueda}
          onChange={(e) => setTerminoBusqueda(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            Buscar
          </button>
        </div>
      </div>
    </form>
 );
};

export default Buscador;
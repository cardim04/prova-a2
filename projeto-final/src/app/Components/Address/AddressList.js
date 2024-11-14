import React from 'react';

const AddressList = ({ addresses, onEdit, onDelete }) => {
  return (
    <div>
      <h3>Lista de Endereços</h3>
      <ul>
        {addresses.map((address, index) => (
          <li key={index}>
            <div>
              <strong>{address.street}</strong> - {address.city} - {address.state} - {address.country} ({address.addressType})
              <button onClick={() => onEdit(address, index)}>Editar</button>
              <button onClick={() => onDelete(index)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressList;

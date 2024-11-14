import React from 'react';

const OrderList = ({ orders, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Lista de Pedidos</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            <div>
              <strong>ID Cliente: {order.customerId}</strong> - {order.orderDate} - {order.status} - R$ {order.total}
              <button onClick={() => onEdit(order, index)}>Editar</button>
              <button onClick={() => onDelete(index)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;

import React from 'react';

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <div>
              <strong>{product.name}</strong> - {product.price} - {product.category}
              <button onClick={() => onEdit(product, index)}>Editar</button>
              <button onClick={() => onDelete(index)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

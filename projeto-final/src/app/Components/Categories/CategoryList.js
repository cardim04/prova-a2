import React from 'react';

const CategoryList = ({ categories, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Lista de Categorias</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <div>
              <strong>{category.name}</strong> - {category.description} - {category.status}
              <button onClick={() => onEdit(category, index)}>Editar</button>
              <button onClick={() => onDelete(index)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;

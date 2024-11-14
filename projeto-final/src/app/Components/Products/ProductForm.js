import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Definição do esquema de validação
const schema = yup.object().shape({
  name: yup.string().required('Nome do produto é obrigatório'),
  price: yup.number().positive('Preço deve ser positivo').required('Preço é obrigatório'),
  category: yup.string().required('Categoria é obrigatória'),
  stock: yup.number().integer('Estoque deve ser um número inteiro').required('Estoque é obrigatório'),
  description: yup.string().required('Descrição é obrigatória'),
});

const ProductForm = ({ selectedProduct, onSave }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  // Estado para armazenar as categorias carregadas
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Carregar as categorias do localStorage
    const savedCategories = JSON.parse(localStorage.getItem('categories')) || [];
    setCategories(savedCategories);

    // Se houver um produto selecionado, preencher o formulário
    if (selectedProduct) {
      reset(selectedProduct);
    }
  }, [selectedProduct, reset]);

  const onSubmit = (data) => {
    onSave(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome do Produto</label>
        <input {...register('name')} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label>Preço</label>
        <input type="number" {...register('price')} />
        {errors.price && <span>{errors.price.message}</span>}
      </div>

      <div>
        <label>Categoria</label>
        <select {...register('category')}>
          <option value="">Selecione uma categoria</option>
          {categories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category && <span>{errors.category.message}</span>}
      </div>

      <div>
        <label>Estoque</label>
        <input type="number" {...register('stock')} />
        {errors.stock && <span>{errors.stock.message}</span>}
      </div>

      <div>
        <label>Descrição</label>
        <textarea {...register('description')} />
        {errors.description && <span>{errors.description.message}</span>}
      </div>

      <button type="submit">{selectedProduct ? 'Atualizar' : 'Salvar'}</button>
    </form>
  );
};

export default ProductForm;

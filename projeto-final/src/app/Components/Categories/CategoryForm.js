import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Nome da categoria é obrigatório'),
  description: yup.string().required('Descrição é obrigatória'),
  status: yup.string().required('Status é obrigatório'),
});

const CategoryForm = ({ selectedCategory, onSave }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (selectedCategory) {
      reset(selectedCategory);
    }
  }, [selectedCategory, reset]);

  const onSubmit = (data) => {
    onSave(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome da Categoria</label>
        <input {...register('name')} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label>Descrição</label>
        <input {...register('description')} />
        {errors.description && <span>{errors.description.message}</span>}
      </div>

      <div>
        <label>Status</label>
        <select {...register('status')}>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
        </select>
        {errors.status && <span>{errors.status.message}</span>}
      </div>

      <button type="submit">{selectedCategory ? 'Atualizar' : 'Salvar'}</button>
    </form>
  );
};

export default CategoryForm;

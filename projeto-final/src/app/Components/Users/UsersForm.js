import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Validação com Yup
const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório').matches(/^\d{10,11}$/, 'Telefone inválido'),
  address: yup.string().required('Endereço é obrigatório'),
  birthDate: yup.date().required('Data de nascimento é obrigatória'),
  document: yup.string().required('Documento é obrigatório').matches(/^\d{11}$/, 'CPF inválido'),
  gender: yup.string().required('Sexo é obrigatório'),
  status: yup.string().required('Status é obrigatório'),
  observations: yup.string().optional(),
});

const UsersForm = ({ selectedUser, onSave }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (selectedUser) {
      reset(selectedUser);
    }
  }, [selectedUser, reset]);

  const onSubmit = (data) => {
    onSave(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome</label>
        <input {...register('name')} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label>Email</label>
        <input {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Telefone</label>
        <input {...register('phone')} />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>

      <div>
        <label>Endereço</label>
        <input {...register('address')} />
        {errors.address && <span>{errors.address.message}</span>}
      </div>

      <div>
        <label>Data de Nascimento</label>
        <input type="date" {...register('birthDate')} />
        {errors.birthDate && <span>{errors.birthDate.message}</span>}
      </div>

      <div>
        <label>Documento (CPF)</label>
        <input {...register('document')} />
        {errors.document && <span>{errors.document.message}</span>}
      </div>

      <div>
        <label>Sexo</label>
        <select {...register('gender')}>
          <option value="">Selecione</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>
        {errors.gender && <span>{errors.gender.message}</span>}
      </div>

      <div>
        <label>Status</label>
        <select {...register('status')}>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
        </select>
        {errors.status && <span>{errors.status.message}</span>}
      </div>

      <div>
        <label>Observações</label>
        <textarea {...register('observations')} />
      </div>

      <button type="submit">{selectedUser ? 'Atualizar' : 'Salvar'}</button>
    </form>
  );
};

export default UsersForm;

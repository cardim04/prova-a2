import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    customerId: yup.string().required('ID do cliente é obrigatório'),
    orderDate: yup.date().required('Data do pedido é obrigatória'),
    status: yup.string().required('Status é obrigatório'),
    total: yup.number().positive('Total deve ser positivo').required('Total é obrigatório'),
  });
  

const OrderForm = ({ selectedOrder, onSave }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (selectedOrder) {
      reset(selectedOrder);
    }
  }, [selectedOrder, reset]);

  const onSubmit = (data) => {
    onSave(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>ID do Cliente</label>
        <input {...register('customerId')} />
        {errors.customerId && <span>{errors.customerId.message}</span>}
      </div>

      <div>
        <label>Data do Pedido</label>
        <input type="date" {...register('orderDate')} />
        {errors.orderDate && <span>{errors.orderDate.message}</span>}
      </div>

      <div>
        <label>Status</label>
        <select {...register('status')}>
          <option value="Pendente">Pendente</option>
          <option value="Finalizado">Finalizado</option>
        </select>
        {errors.status && <span>{errors.status.message}</span>}
      </div>

      <div>
        <label>Total</label>
        <input type="number" {...register('total')} />
        {errors.total && <span>{errors.total.message}</span>}
      </div>

      <button type="submit">{selectedOrder ? 'Atualizar' : 'Salvar'}</button>
    </form>
  );
};

export default OrderForm;

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    userId: yup.string().required('ID do usuário é obrigatório'),
    street: yup.string().required('Rua é obrigatória'),
    city: yup.string().required('Cidade é obrigatória'),
    state: yup.string().required('Estado é obrigatório'),
    country: yup.string().required('País é obrigatório'),
    addressType: yup.string().required('Tipo de endereço é obrigatório'),
  });
  

const AddressForm = ({ selectedAddress, onSave }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (selectedAddress) {
      reset(selectedAddress);
    }
  }, [selectedAddress, reset]);

  const onSubmit = (data) => {
    onSave(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>ID do Usuário</label>
        <input {...register('userId')} />
        {errors.userId && <span>{errors.userId.message}</span>}
      </div>

      <div>
        <label>Rua</label>
        <input {...register('street')} />
        {errors.street && <span>{errors.street.message}</span>}
      </div>

      <div>
        <label>Cidade</label>
        <input {...register('city')} />
        {errors.city && <span>{errors.city.message}</span>}
      </div>

      <div>
        <label>Estado</label>
        <input {...register('state')} />
        {errors.state && <span>{errors.state.message}</span>}
      </div>

      <div>
        <label>País</label>
        <input {...register('country')} />
        {errors.country && <span>{errors.country.message}</span>}
      </div>

      <div>
        <label>Tipo de Endereço</label>
        <select {...register('addressType')}>
          <option value="Residencial">Residencial</option>
          <option value="Comercial">Comercial</option>
        </select>
        {errors.addressType && <span>{errors.addressType.message}</span>}
      </div>

      <button type="submit">{selectedAddress ? 'Atualizar' : 'Salvar'}</button>
    </form>
  );
};

export default AddressForm;

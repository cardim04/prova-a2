"use client"

import React, { useState, useEffect } from 'react';
import UsersForm from '../app/Components/Users/UsersForm';
import UsersList from '../app/Components/Users/UsersList';
import ProductForm from '../app/Components/Products/ProductForm';
import ProductList from '../app/Components/Products/ProductList';
import CategoryForm from '../app/Components/Categories/CategoryForm';
import CategoryList from '../app/Components/Categories/CategoryList';
import OrderForm from '../app/Components/Categories/OrderForm';
import OrderList from '../app/Components/Categories/OrderList';
import AddressForm from '../app/Components/Address/AddressForm';
import AddressList from '../app/Components/Address/AddressList'; // Importando AddressList
import '../app/styles/styles.css';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]); // Estado para os endereços
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null); // Estado para o endereço selecionado
  const [currentSection, setCurrentSection] = useState('users'); // Controle da seção visível

  // Carrega os dados do localStorage
  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem('users')) || []);
    setProducts(JSON.parse(localStorage.getItem('products')) || []);
    setCategories(JSON.parse(localStorage.getItem('categories')) || []);
    setOrders(JSON.parse(localStorage.getItem('orders')) || []);
    setAddresses(JSON.parse(localStorage.getItem('addresses')) || []); // Carregando endereços
  }, []);

  // Salva ou atualiza os dados
  const handleSave = (data, type) => {
    let updatedList;
    if (type === 'user') {
      updatedList = selectedUser
        ? users.map((user, index) => index === selectedUser.index ? data : user)
        : [...users, data];
      setUsers(updatedList);
      localStorage.setItem('users', JSON.stringify(updatedList));
    } else if (type === 'product') {
      updatedList = selectedProduct
        ? products.map((product, index) => index === selectedProduct.index ? data : product)
        : [...products, data];
      setProducts(updatedList);
      localStorage.setItem('products', JSON.stringify(updatedList));
    } else if (type === 'category') {
      updatedList = selectedCategory
        ? categories.map((category, index) => index === selectedCategory.index ? data : category)
        : [...categories, data];
      setCategories(updatedList);
      localStorage.setItem('categories', JSON.stringify(updatedList));
    } else if (type === 'order') {
      updatedList = selectedOrder
        ? orders.map((order, index) => index === selectedOrder.index ? data : order)
        : [...orders, data];
      setOrders(updatedList);
      localStorage.setItem('orders', JSON.stringify(updatedList));
    } else if (type === 'address') {
      updatedList = selectedAddress
        ? addresses.map((address, index) => index === selectedAddress.index ? data : address)
        : [...addresses, data];
      setAddresses(updatedList);
      localStorage.setItem('addresses', JSON.stringify(updatedList));
    }
  };

  // Funções para edição e exclusão
  const handleEdit = (data, type, index) => {
    if (type === 'user') setSelectedUser({ ...data, index });
    if (type === 'product') setSelectedProduct({ ...data, index });
    if (type === 'category') setSelectedCategory({ ...data, index });
    if (type === 'order') setSelectedOrder({ ...data, index });
    if (type === 'address') setSelectedAddress({ ...data, index }); // Para endereços
  };

  const handleDelete = (type, index) => {
    let updatedList;
    if (type === 'user') {
      updatedList = users.filter((_, i) => i !== index);
      setUsers(updatedList);
      localStorage.setItem('users', JSON.stringify(updatedList));
    } else if (type === 'product') {
      updatedList = products.filter((_, i) => i !== index);
      setProducts(updatedList);
      localStorage.setItem('products', JSON.stringify(updatedList));
    } else if (type === 'category') {
      updatedList = categories.filter((_, i) => i !== index);
      setCategories(updatedList);
      localStorage.setItem('categories', JSON.stringify(updatedList));
    } else if (type === 'order') {
      updatedList = orders.filter((_, i) => i !== index);
      setOrders(updatedList);
      localStorage.setItem('orders', JSON.stringify(updatedList));
    } else if (type === 'address') {
      updatedList = addresses.filter((_, i) => i !== index);
      setAddresses(updatedList);
      localStorage.setItem('addresses', JSON.stringify(updatedList));
    }
  };

  // Renderiza a seção com base no estado currentSection
  const renderSection = () => {
    switch (currentSection) {
      case 'users':
        return (
          <>
            <UsersForm selectedUser={selectedUser} onSave={(data) => handleSave(data, 'user')} />
            <UsersList users={users} onEdit={(user, index) => handleEdit(user, 'user', index)} onDelete={(index) => handleDelete('user', index)} />
          </>
        );
      case 'products':
        return (
          <>
            <ProductForm selectedProduct={selectedProduct} onSave={(data) => handleSave(data, 'product')} />
            <ProductList products={products} onEdit={(product, index) => handleEdit(product, 'product', index)} onDelete={(index) => handleDelete('product', index)} />
          </>
        );
      case 'categories':
        return (
          <>
            <CategoryForm selectedCategory={selectedCategory} onSave={(data) => handleSave(data, 'category')} />
            <CategoryList categories={categories} onEdit={(category, index) => handleEdit(category, 'category', index)} onDelete={(index) => handleDelete('category', index)} />
          </>
        );
      case 'orders':
        return (
          <>
            <OrderForm selectedOrder={selectedOrder} onSave={(data) => handleSave(data, 'order')} />
            <OrderList orders={orders} onEdit={(order, index) => handleEdit(order, 'order', index)} onDelete={(index) => handleDelete('order', index)} />
          </>
        );
      case 'addresses':
        return (
          <>
            <AddressForm selectedAddress={selectedAddress} onSave={(data) => handleSave(data, 'address')} />
            <AddressList addresses={addresses} onEdit={(address, index) => handleEdit(address, 'address', index)} onDelete={(index) => handleDelete('address', index)} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li><button onClick={() => setCurrentSection('users')}>Usuários</button></li>
          <li><button onClick={() => setCurrentSection('products')}>Produtos</button></li>
          <li><button onClick={() => setCurrentSection('categories')}>Categorias</button></li>
          <li><button onClick={() => setCurrentSection('orders')}>Pedidos</button></li>
          <li><button onClick={() => setCurrentSection('addresses')}>Endereços</button></li> {/* Nova sessão de endereços */}
        </ul>
      </nav>

      {renderSection()}
    </div>
  );
};

export default HomePage;

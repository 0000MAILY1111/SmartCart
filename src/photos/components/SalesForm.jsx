import React, { useState } from 'react';

const SalesForm = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phoneNumber: '',
    product: '',
    quantity: 1,
    totalPrice: 0
  });

  const [errors, setErrors] = useState({});

  const productPrices = {
    'Producto A': 100,
    'Producto B': 250,
    'Producto C': 500
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedFormData = {
      ...formData,
      [name]: value
    };

    // Calcular precio total si cambia el producto o la cantidad
    if (name === 'product' || name === 'quantity') {
      updatedFormData.totalPrice = 
        (productPrices[updatedFormData.product] || 0) * 
        (updatedFormData.quantity || 1);
    }

    setFormData(updatedFormData);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'El nombre del cliente es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo electrónico no válido';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'El número de teléfono es obligatorio';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Número de teléfono debe tener 10 dígitos';
    }

    if (!formData.product) {
      newErrors.product = 'Debe seleccionar un producto';
    }

    if (formData.quantity < 1) {
      newErrors.quantity = 'La cantidad debe ser al menos 1';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado:', formData);
      alert('Venta registrada exitosamente');
    } else {
      alert('Por favor, corrija los errores en el formulario');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Formulario de Ventas
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="customerName" className="block text-gray-700 font-bold mb-2">
            Nombre del Cliente
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none 
              ${errors.customerName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Ingrese nombre del cliente"
          />
          {errors.customerName && (
            <p className="text-red-500 text-sm mt-1">{errors.customerName}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none 
              ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Ingrese correo electrónico"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
            Número de Teléfono
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none 
              ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Ingrese número de teléfono"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="product" className="block text-gray-700 font-bold mb-2">
            Producto
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none 
              ${errors.product ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Seleccione un producto</option>
            <option value="Producto A">Producto A - $100</option>
            <option value="Producto B">Producto B - $250</option>
            <option value="Producto C">Producto C - $500</option>
          </select>
          {errors.product && (
            <p className="text-red-500 text-sm mt-1">{errors.product}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
            Cantidad
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none 
              ${errors.quantity ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.quantity && (
            <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Precio Total
          </label>
          <input
            type="text"
            value={`$${formData.totalPrice.toFixed(2)}`}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Registrar Venta
        </button>
      </form>
    </div>
  );
};

export default SalesForm;
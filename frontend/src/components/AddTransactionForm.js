import React, { useState } from 'react';
import api from '../services/api';
import './form.css';

const AddTransactionForm = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'receita',
        amount: '',
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('transactions/', formData)
           .then(response => {
               onAdd(response.data);
               setFormData({ title: '', category: 'receita', amount: '', date: '' });
           })
           .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: 20}}>
            <input name="title" placeholder="Descrição" value={formData.title} onChange={handleChange} />
            <input name="amount" placeholder="Quantia" value={formData.amount} onChange={handleChange} />
            <input name="date" type="date" value={formData.date} onChange={handleChange} />
            <select name="category" value={formData.category} onChange={handleChange}>
                <option value="receita">Receita</option>
                <option value="despesa">Despesa</option>
            </select>            
            <button type="submit">Adiciona Transação</button>
        </form>
    );
};

export default AddTransactionForm;
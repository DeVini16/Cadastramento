import React, { useState } from 'react';
import '../styles/cadastro.css';
import Listagem from './Listagem';

const Cadastro = () => {
  const [form, setForm] = useState({ nome: '', cpf: '', idade: '' });
  const [lista, setLista] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLista((prevLista) => [...prevLista, form]);
    setForm({ nome: '', cpf: '', idade: '' });
  };

  return (
    <div className='container-principal'>
      <div className='container-cadastro'>
        <h1>Cadastro de Usuários</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>CPF:</label>
            <input
              type="text"
              name="cpf"
              value={form.cpf}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Idade:</label>
            <input
              type="number"
              name="idade"
              value={form.idade}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </div>

      <Listagem lista={lista}/>
    </div>
  );
};

export default Cadastro;

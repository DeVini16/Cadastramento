import React, { useState, useEffect } from 'react';
import '../styles/listagem.css';
import { DeleteOutlined, LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

const Listagem = () => {
  const [listRegister, setListRegister] = useState([]);
  const naviagte = useNavigate() 

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("Users"));
    setListRegister(savedUsers);
  }, []); 

  return (
  <>
    <h5 className='arrow-return' onClick={() => naviagte('/')}>
      <LeftOutlined />Voltar
    </h5>
    <div className='lista-usuarios-container'>
      <div className='lista-usuarios'>
        <h2>Lista de Usuários</h2>
        <ul>
          {listRegister.map((item, index) => (
            <li key={index}>
              <div className='item-info'>
                <span><strong>Nome:</strong> {item.nome}</span>
                <span><strong>CPF:</strong> {item.cpf}</span>
                <span><strong>Idade:</strong> {item.idade}</span>
                <span><strong>Gênero:</strong> {item.gender}</span>
              </div>
              <div className='delete-icon'>
              <DeleteOutlined  />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
  );
}

export default Listagem;

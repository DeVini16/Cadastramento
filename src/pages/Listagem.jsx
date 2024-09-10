import React from 'react';
import '../styles/listagem.css';

const Listagem = ({ lista }) => {
  return (
    <div className='lista-usuarios-container'>
      <div className='lista-usuarios'>
        <h2>Lista de Usuários</h2>
        <ul>
          {lista.map((item, index) => (
            <li key={index}>
              <div className='item-info'>
                <span><strong>Nome:</strong> {item.nome}</span>
                <span><strong>CPF:</strong> {item.cpf}</span>
                <span><strong>Idade:</strong> {item.idade}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Listagem;

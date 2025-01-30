import React, { useEffect, useState } from 'react';
import { Form, Input, Button, InputNumber, Select, notification } from 'antd';

import '../styles/cadastro.css';
import { Option } from 'antd/es/mentions';
import { useNavigate } from 'react-router';

const Cadastro = () => {
  const [form] = Form.useForm();
  const [register, setRegister] = useState(() => {
    return JSON.parse(localStorage.getItem('Users')) || [];
  });
  const [, setListUsers] = useState(register);

  const navigate = useNavigate();
  
  useEffect(() => {
    localStorage.setItem('Users', JSON.stringify(register));
    setListUsers(register);
  }, [register]); 

  const SendUser = (values) => {
    const cpfJaCadastrado = register.some(item => item.cpf === values.cpf);
    
    if (cpfJaCadastrado) {
      notification.error({message: 'CPF já cadastrado!'});
      return;
    }

    setRegister((prevLista) => [...prevLista, values]);
    notification.success({message: 'Usuário cadastrado com sucesso!'});
    form.resetFields();
  };

  return (
    <div className="container-principal">
      <div className='container-cadastro'>

        <div className='welcome-modal'>
          <div className='welcome-text'>
            <h2>Welcome!</h2>
            <p>Aproveite e faça um Cadastro</p><br/>
          </div>
        </div>

        <div className="modal-cadastro">
          <h2>Cadastre-se</h2>
          <Form
            form={form}
            onFinish={SendUser}
            layout="vertical"
          >
            <Form.Item
              label="Nome"
              name="nome"
              rules={[{ required: true, message: 'Por favor, insira o nome' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="CPF"
              name="cpf"
              rules={[
                { required: true, message: 'Por favor, insira o CPF' },
                { len: 11, message: 'O CPF deve ter 11 dígitos' }
              ]}
            >
              <Input maxLength={11} />
            </Form.Item>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                { required: true, message: 'Por favor, selecione o Gênero'},
              ]}
            >
              <Select
                allowClear
              >
                <Option value="Masculino">Masculino</Option>
                <Option value="Feminino">Feminino</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Idade"
              name="idade"
              rules={[{ required: true, message: 'Por favor, insira a idade' }]}
            >
              <InputNumber max={130} min={0} />
            </Form.Item>


            <div className='container-button'>
              <Button type="primary" htmlType="submit">
                Adicionar
              </Button>

              <Button type="link" 
              htmlType='button' 
              onClick={() => navigate('/usuarios')}
              >
                Usuários
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;

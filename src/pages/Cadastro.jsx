import React, { useState } from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import '../styles/cadastro.css';
import Listagem from './Listagem';

const Cadastro = () => {
  const [form] = Form.useForm();
  const [lista, setLista] = useState([]);

  const onFinish = (values) => {
    setLista((prevLista) => [...prevLista, values]);
    console.log(lista)
    form.resetFields();
  };

  return (
    <div className="container-principal">
      <div className="container-cadastro">
        <h1>Cadastro de Usuários</h1>
        <Form
          form={form}
          onFinish={onFinish}
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
              { len: 11, message: 'O CPF deve ter 11 dígitos' },
            ]}
          >
            <Input maxLength={11} />
          </Form.Item>

          <Form.Item
            label="Idade"
            name="idade"
            rules={[{ required: true, message: 'Por favor, insira a idade' }]}
          >
            <InputNumber maxLength={3} />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Adicionar
          </Button>
        </Form>
      </div>

      <Listagem lista={lista} />
    </div>
  );
};

export default Cadastro;

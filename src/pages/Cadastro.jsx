import React from "react";
import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import "../styles/cadastro.css";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const typeGender = [
{ genero: 'Masculino', value: 1 },
{ genero: 'Feminino', value: 2 }
]

const Cadastro = () => {
  return (
    <div>
      <div className="container">
        <h2 className="txt-cadastro">Faça seu Cadastro</h2>

        <div className="container-cadastro">
          <Form
            {...formItemLayout}
            variant="filled"
          >
            <Form.Item
              label="Nome"
              name="nome"
              rules={[
                {
                  required: true,
                  message: "Campo obrigatório!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Idade"
              name="idade"
              rules={[
                {
                  required: true,
                  message: "Campo obrigatório!",
                },
              ]}
            >
              <InputNumber
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item
              label="Gênero"
              name="gênero"
              o
              rules={[
                {
                  required: true,
                  message: "Campo obrigatório!",
                },
              ]}
            >
              <Select options={typeGender.genero}/>
            </Form.Item>

            <Form.Item
              label="Aniversário"
              name="aniversário"
              
              rules={[
                {
                  required: true,
                  message: "Campo obrigatório!",
                },
              ]}
            >
              <DatePicker  />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;

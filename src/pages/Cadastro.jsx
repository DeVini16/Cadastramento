import React from "react";
import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";

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

const Cadastro = () => {
  return (
    <div>
      <div className="container">
        <h2 className="txt-cadastro">Faça seu Cadastro</h2>
      </div>

      <div className="container-cadastro">
        <Form
          {...formItemLayout}
          variant="filled"
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            label="Nome Completo"
            name="nome"
            rules={[
              {
                required: true,
                message: "Please input!",
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
                message: "Please input!",
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
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <Select />
          </Form.Item>

          <Form.Item
            label="Aniversário"
            name="aniversário"
            rules={[
              {
                required: true,
                message: "Please input!",
              },
            ]}
          >
            <DatePicker />
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
  );
};

export default Cadastro;

import React, {useState} from 'react';
import { useAppDispatch } from '../redux/useAppDispatch';
import { addSinglePost } from '../redux/posts/postReducers';
import { Button, Input, Drawer, Form, Row } from 'antd';
import { ISinglePostRequest } from '../types/postTypes';
import svgs from '../assets/images/svgs';
import Icon, { EditFilled } from '@ant-design/icons';

const FormComponent = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const handleSubmit = (values: ISinglePostRequest): void => {
    dispatch(addSinglePost(values));
    form.resetFields();
  };

  return (
    <>
      <Button icon={<EditFilled />} onClick={() => setOpen(true)} />
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Form form={form} onFinish={handleSubmit} className="form-container">
          <Form.Item
            name="quote"
            label="Quotation"
            rules={[{ required: true, message: "You need to type your fav quote!" }]}>
            <Input type="text" />
          </Form.Item>
          <Form.Item
            name="author"
            label="Author"
            rules={[{ required: true, message: "Please mention the author / owner." }]}>
            <Input type="text" />
          </Form.Item>
          <Button className="ant-btn blue" htmlType='submit'>Add</Button>
        </Form>
      </Drawer>
    </>
  )
};

export default FormComponent;

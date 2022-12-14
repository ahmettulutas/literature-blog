import React, {useState} from 'react';
import { useAppDispatch } from '../redux/useAppDispatch';
import { addSinglePost } from '../redux/posts/postReducers';
import { Button, Input, Drawer, Form, Select, Col } from 'antd';
import { ISinglePostRequest } from '../types/postTypes';
import  { EditFilled } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

const data = [{ label: 1, value: 1 }, { label: 2, value: 2 }, { label: 3, value: 3 }];

const FormComponent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const handleSubmit = (values: ISinglePostRequest): void => {
    dispatch(addSinglePost(values));
    form.resetFields();
  };

  return (
    <>
      <Col> 
      <Button icon={<EditFilled />} onClick={() => setOpen(true)}>Click to quothe</Button>
      </Col>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Form layout="vertical" form={form} onFinish={handleSubmit} className="form-container">
          <Form.Item
            name="quote"
            label="The quotation that changed your life"
            rules={[{ required: true, message: "You need to type your fav quote!" }]}>
            <TextArea placeholder="type your quotation here" rows={4} />
          </Form.Item>
          <Form.Item
            name="author"
            label="The writer / owner of the quotation"
            rules={[{ required: true, message: "Please mention the author / owner." }]}>
            <Input placeholder="mention the author" type="text" />
          </Form.Item>
          <Form.Item
            name="categories"
            label="The writer / owner of the quotation"
            rules={[{ required: false, message: "Select Categories." }]}>
            <Select
              mode="multiple"
              showArrow
              placeholder="Select categories" options={data} />
          </Form.Item>
          <Button className="ant-btn blue" htmlType='submit'>SEND</Button>
        </Form>
      </Drawer>
    </>
  )
};

export default FormComponent;

import React, {useState} from 'react'
import { useAppDispatch } from '../redux/useAppDispatch';
import { addSinglePost } from '../redux/posts/postReducers';
import { Button, Input, Form, Row, Col } from 'antd';
import { ISinglePostRequest } from '../types/postTypes';

const  FormComponent = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const handleSubmit = (values:ISinglePostRequest):void => {
   dispatch(addSinglePost(values));
   form.resetFields();
  };

  return (

    <Form form={form} onFinish={handleSubmit}>
      <Row className="form-container">
        <Col>
        <Form.Item
          name="quote"
          label="quote"
          rules= {[{ required:true, message:"You need to type your fav quote!"}]}> 
          <Input type="text"/>
        </Form.Item>
        </Col>
        <Col>
        <Form.Item
          name="author"
          label="author"
          rules= {[{required:true, message:"Please mention the author / owner."}]}> 
          <Input type="text"/>
        </Form.Item>
        </Col>
        <Button className="ant-btn blue" type="primary" htmlType='submit'>Add</Button>
    </Row>
    </Form>
  )
}
export default FormComponent;

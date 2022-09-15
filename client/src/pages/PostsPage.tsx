import React, { useEffect } from 'react'
import { useAppDispatch } from '../redux/useAppDispatch';
import { getPosts } from '../redux/posts/postReducers';
import Form from '../components/Form';
import { PostList } from '../components/PostList';
import { Row } from 'antd';
import Header from '../components/Header';

export default function PostsPage() {
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  
  return (
    <Row className="post-page">
      <Header />
      <PostList />
      <Form />
    </Row>
  )
}

import { Col, Row } from 'antd';
import React from 'react';
import { IRootState } from '../redux/store';
import { useAppSelector } from '../redux/useAppSelector';
import { ISinglePost } from '../types/postTypes';
import PostCard from './PostCard';


export const PostList = () => {
  const posts = useAppSelector((state: IRootState) => state.posts.posts)
  return (
    <Row>{posts?.map((item: ISinglePost) => <Col sm={24} md={8} span={2} className="post-col" key={item._id}><PostCard post={item}/></Col>)}</Row>
  )
}
